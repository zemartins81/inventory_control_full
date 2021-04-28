export default {
  // Stop running __tests__ after `n` failures
  bail: true,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ["src/**"],
  // The directory where Jest should output its coverage files
  coverageDirectory: "__tests__/coverage",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.test.js"],
};
