
/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {

  clearMocks: true,

  coverageDirectory: 'coverage',

  // An array of file extensions your modules use

  moduleFileExtensions: [

    'js',

    'jsx',

  ],

  setupFilesAfterEnv: ['jest-enzyme'],

  testEnvironment: 'enzyme',

  // Options that will be passed to the testEnvironment

  testEnvironmentOptions: {

    enzymeAdapter: 'react16',

  },

  // A map from regular expressions to paths to transformers

  transform: {

    '^.+\\.jsx$': 'babel-jest',

  },


  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },

};