// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
const registerCypressGrep = require("@cypress/grep");
registerCypressGrep();

// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

Cypress.on("window:before:load", (win) => {
  cy.stub(win.console, "error").callsFake((msg) => {
    // log out to the ternimal
    cy.now("task", "error", msg);
    // log to Command Log and Fail the test
    throw new Error(msg);
  });
});

// Import commands.js using ES2015 syntax:
import "./commands";

import "cypress-axe";
// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

// Cypress.on("window:before:load", (win) => {
//   cy.stub(win.console, "log", (msg) => {
//     cy.task("log", `console.log --> ${msg}`);
//   });
//   cy.stub(win.console, "error", (msg) => {
//     cy.task("log", `console.error --> ${msg}`);
//   });
// });

// if ((win.console.error as any).restore) {
//   (win.console.error as any).restore();
// }
// cy.spy(win.console, 'error');
