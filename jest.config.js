module.exports = {
    "testEnvironment": "jsdom",
    "moduleFileExtensions": ["js", "json", "vue"],
    "transform": {
        "^.+\\.js$": "babel-jest",
        "^.+\\.vue$": "@vue/vue3-jest"
    },
    "bail": 1,
    "verbose": true,
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },
}