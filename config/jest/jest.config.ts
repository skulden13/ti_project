/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>src/**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  rootDir: '../../',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
