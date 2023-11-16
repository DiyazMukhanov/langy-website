const nextJest = require("next/jest");
const createJestConfig = nextJest({
    dir: "./",
});
const customJestConfig = {
    moduleDirectories: ["node_modules", "<rootDir>/"],
    moduleNameMapper: {
        '\\.(scss)$': '<rootDir>/node_modules/jest-css-modules'
    },
    transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
    },
    testEnvironment: "jest-environment-jsdom",
    testRegex: "(/__tests__/.*|(\\.|/)testing)\\.jsx?$"
};
module.exports = createJestConfig(customJestConfig);
