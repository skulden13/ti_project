const path = require('path');
const net = require('net');
const { spawn } = require('child_process');

const rootDir = path.resolve(__dirname, '..', '..');
const staticDir = path.join(rootDir, 'storybook-static');
const port = '6006';
const host = '0.0.0.0';

const pythonArgs = ['-m', 'http.server', port, '--bind', host, '--directory', staticDir];

const server = spawn('python3', pythonArgs, {
  cwd: rootDir,
  stdio: 'inherit',
});

let loki;

function waitForPort({ host: targetHost, port: targetPort, timeoutMs = 5000 }) {
  const startedAt = Date.now();

  return new Promise((resolve, reject) => {
    const tryConnect = () => {
      const socket = net.createConnection({ host: targetHost, port: Number(targetPort) });

      socket.once('connect', () => {
        socket.end();
        resolve();
      });

      socket.once('error', () => {
        socket.destroy();
        if (Date.now() - startedAt >= timeoutMs) {
          reject(new Error(`Timed out waiting for ${targetHost}:${targetPort}`));
          return;
        }
        setTimeout(tryConnect, 100);
      });
    };

    tryConnect();
  });
}

function shutdown(code = 0) {
  if (loki && !loki.killed) {
    loki.kill('SIGTERM');
  }
  if (!server.killed) {
    server.kill('SIGTERM');
  }
  process.exit(code);
}

server.on('error', (error) => {
  console.error(error);
  shutdown(1);
});

server.on('spawn', async () => {
  try {
    await waitForPort({ host: '127.0.0.1', port });
  } catch (error) {
    console.error(error);
    shutdown(1);
    return;
  }

  const lokiBin = path.join(rootDir, 'node_modules', 'loki', 'bin', 'loki');
  const lokiArgs = process.argv.slice(2);

  loki = spawn(process.execPath, [lokiBin, ...lokiArgs], {
    cwd: rootDir,
    stdio: 'inherit',
    env: process.env,
  });

  loki.on('exit', (code, signal) => {
    if (!server.killed) {
      server.kill('SIGTERM');
    }

    if (signal) {
      process.kill(process.pid, signal);
      return;
    }

    process.exit(code ?? 1);
  });
});

process.on('SIGINT', () => shutdown(130));
process.on('SIGTERM', () => shutdown(143));
