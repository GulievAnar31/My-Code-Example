import path from "path";

export default {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\'
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  moduleDirectories: [
    'node_modules'
  ],
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
  ],
  rootDir: '../',
  modulePaths: [
    '<rootDir>src'
  ],
  setupFilesAfterEnv: ['<rootDir>config/setupTests.ts'],
  moduleNameMapper: {
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '\\.(scss)$': 'identity-obj-proxy',
  },
}
