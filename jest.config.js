module.exports = {
  projects: [
    // Client-side React
    {
      displayName: 'client',
      testMatch: ['<rootDir>/src/tests/**/*'],
      testPathIgnorePatterns: [
        '<rootDir>/.next/',
        '<rootDir>/node_modules/',
        'pages/api/',
      ],
      moduleNameMapper: {
        '\\.(css)$': '<rootDir>/__mocks__/cssMock.ts',
      },
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
      transform: {
        '^.+\\.(js|ts|jsx|tsx)$': ['@swc/jest'],
        '^.+\\.svg$': './src/utils/jestSvgTransform.js',
      },
    },
    // Server-side Node
    {
      displayName: 'server',
      testMatch: ['<rootDir>/src/tests/pages/api/**/*'],
      testEnvironment: 'node',
      testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
      transform: {
        '^.+\\.(js|ts|jsx|tsx)$': '<rootDir>/node_modules/babel-jest',
      },
    },
  ],
};
