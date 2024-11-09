const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: process.env.CYPRESS_baseUrl || 'http://web:3000',
        supportFile: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
}); 