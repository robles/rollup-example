module.exports = {
  // An array of file extensions your modules use
  moduleFileExtensions: ['ts', 'tsx', 'js'],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    // Mocks out all these fule formats when tests are run
    '\\.(jps|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // A list of paths to directories that Jest should use to search for files in
  roots: ['./src'],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['node_modules/'],

  // A map from regular expressions to paths to transformers
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  // },

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/*.test.(ts|tsx)'],
};
