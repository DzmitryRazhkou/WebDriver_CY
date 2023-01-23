// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
require("cypress-downloadfile/lib/downloadFileCommand");
// -- This is a parent command --

//commands.js
require("cy-verify-downloads").addCustomCommand();

// Cypress.Commands.add('login', (email, password) => { ... })
//

Cypress.Commands.add("launch", (url) => {
  cy.viewport("macbook-16");
  cy.log(" =====> USER NAVIGATES ON THE " + url + " <===== ");
  cy.visit(Cypress.env(url));
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
  if (opts.displayName === "script" || opts.name === "request") {
    return;
  }
  return origLog(opts, ...other);
};
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
