const path = require('path');
const net = require('net');
const { spawn } = require('child_process');

const rootDir = path.resolve(__dirname, '..', '..');
const staticDir = path.join(rootDir, 'storybook-static');
const port = '6006';
const host = '0.0.0.0';

let server;
let loki;

function checkPortAvailable({ host: targetHost, port: targetPort }) {
  return new Promise((resolve) => {
    const testServer = net.createServer();

    testServer.once('error', () => {
      resolve(false);
    });

    testServer.once('listening', () => {
      testServer.close(() => resolve(true));
    });

    testServer.listen(Number(targetPort), targetHost);
  });
}

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
  if (server && !server.killed) {
    server.kill('SIGTERM');
  }
  process.exit(code);
}

function runLoki() {
  const lokiBin = path.join(rootDir, 'node_modules', 'loki', 'bin', 'loki');
  const lokiArgs = process.argv.slice(2);

  loki = spawn(process.execPath, [lokiBin, ...lokiArgs], {
    cwd: rootDir,
    stdio: 'inherit',
    env: process.env,
  });

  loki.on('exit', (code, signal) => {
    if (server && !server.killed) {
      server.kill('SIGTERM');
    }

    if (signal) {
      process.kill(process.pid, signal);
      return;
    }

    process.exit(code ?? 1);
  });
}

async function start() {
  const isPortAvailable = await checkPortAvailable({ host, port });

  if (!isPortAvailable) {
    console.error(
      `Port ${port} is already in use. Stop the process on ${port} before running Loki.`,
    );
    process.exit(1);
    return;
  }

  const pythonArgs = ['-m', 'http.server', port, '--bind', host, '--directory', staticDir];

  server = spawn('python3', pythonArgs, {
    cwd: rootDir,
    stdio: 'inherit',
  });

  server.on('error', (error) => {
    console.error(error);
    shutdown(1);
  });

  server.on('exit', (code) => {
    if (!loki) {
      process.exit(code ?? 1);
    }
  });

  server.on('spawn', async () => {
    try {
      await waitForPort({ host: '127.0.0.1', port });
    } catch (error) {
      console.error(error);
      shutdown(1);
      return;
    }

    runLoki();
  });
}

start().catch((error) => {
  console.error(error);
  shutdown(1);
});

process.on('SIGINT', () => shutdown(130));
process.on('SIGTERM', () => shutdown(143));
