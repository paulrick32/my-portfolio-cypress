# My Portfolio Cypress

End-to-end test suite for the AcademyBugs site using Cypress, with automated accessibility checks powered by axe-core.

## Features

- UI smoke tests for key pages
- Accessibility auditing with clear console reporting
- Ready-to-run GitHub Actions workflow

## Tech Stack

- Cypress
- cypress-axe
- axe-core

## Getting Started

Install dependencies:

```bash
npm install
```

Open the Cypress Test Runner:

```bash
npm run cy:open
```

Run all tests headlessly:

```bash
npm test
```

## Accessibility Testing

The accessibility suite injects axe-core into the page and reports violations without failing the test run. This keeps the pipeline green while still showing the problems that need fixing.

What you get in the terminal output:

- Total number of accessibility violations
- A table with violation id, impact, description, and affected node count

You can later switch to strict mode (fail on violations) by removing the `skipFailures` flag in the `cy.checkA11y` call.

## CI with GitHub Actions

The workflow runs on every push or pull request to `main` and executes `npm test` on Ubuntu.

## Project Structure

- `cypress/e2e` — test specs
- `cypress/support` — custom commands and setup
- `cypress.config.js` — Cypress configuration

## License

ISC