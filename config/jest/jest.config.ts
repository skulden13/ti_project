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
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/config/jest/svgMock.tsx',
    '^shared/(.*)$': '<rootDir>/src/shared/$1',
    '^entities/(.*)$': '<rootDir>/src/entities/$1',
    '^features/(.*)$': '<rootDir>/src/features/$1',
    '^widgets/(.*)$': '<rootDir>/src/widgets/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '\\.module\\.s?css$': 'identity-obj-proxy',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>src/**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  rootDir: '../../',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
};
