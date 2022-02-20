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
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { SELECTOR } from '../../src/common/constants.js';

Cypress.Commands.add('submitForm', ($input, userInput) => {
  cy.get($input).type(userInput).type('{enter}');
});

Cypress.Commands.add('initInput', ($input) => {
  cy.get($input).should('have.value', '');
  cy.get($input).should('have.focus');
});

Cypress.Commands.add('race', (delayAfterEnd) => {
  const racingCount = 5;
  const delayPerRace = 1000;
  const totalDelay = delayPerRace * racingCount + delayAfterEnd;

  cy.submitForm(SELECTOR.CAR_NAMES_INPUT, 'king, white, tiger').type('{enter}');
  cy.submitForm(SELECTOR.RACING_COUNT_INPUT, racingCount).type('{enter}');
  cy.tick(totalDelay);
});
