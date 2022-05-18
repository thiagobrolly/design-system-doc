module.exports = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules', 'lib'],
  collectCoverage: true,
  collectCoverageFrom: ['packages/**/src/**/*.ts(x)?'],
  coveragePathIgnorePatterns: ['stories.tsx', 'node_modules', 'lib'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
