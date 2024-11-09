# Forms.io Demo

A demo application showcasing form validation with automated testing using Cypress.

## Prerequisites

- [Volta](https://volta.sh/) - JavaScript Tool Manager

## Setup

Volta will automatically install the correct Node.js version when you run npm commands in this repository.

## Quick start

1. `npm install`
2. `npm test`: run e2e tests locally
3. `npm start`: run server locally

## Developing

- Write test cases - e.g.: `cypress/e2e/form.cy.js`
- Implement features - e.g.: `src/app.js` using FormIO
- `npm test`

## Debugging

There are many ways to debug tests.

1. cypress will output each test result after `npm test`
2. cypress also records screenshots in `cypress/screenshots` for the failed runs at the state it failed
3. `npm run test:debug` will open the cypress UI for step-by-step debugging.
   - You can also use [`debugger` and `.debug()`](https://docs.cypress.io/app/guides/debugging) for break points and additional information.
