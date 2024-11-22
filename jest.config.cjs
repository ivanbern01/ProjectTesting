module.exports = {
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // Process JS and JSX files with Babel
  },
  moduleNameMapper: {
    // Mock CSS files to prevent Jest from trying to process them
    "\\.css$": "identity-obj-proxy",
  },
};
