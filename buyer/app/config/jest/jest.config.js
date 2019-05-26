'use strict';

module.exports = {
    // transform: {
    //     "^.+\\.jsx?$": "babel-jest"
    // }
    "moduleNameMapper": {
        "\\.(css|scss)$": "<rootDir>/config/jest/stylesMock.js"
    },
    rootDir: "../../",
    setupFiles: ['<rootDir>/config/jest/setup.js']
}