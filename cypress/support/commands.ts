/// <reference types="cypress" />
import 'cypress-file-upload';

//declare namespace Cypress {
  //interface Chainable {
   // loginToDashboard(): Chainable<void>;
  //}
//}

// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// Define a custom Cypress command to log in to the Dashboard
Cypress.Commands.add("loginToDashboard",()=>{

    cy.visit("https://app.msaaqdev.com")

    // Load login credentials from the 'dashboard' fixture file
    cy.fixture("dashboard").then((data)=>{
      cy.get('[name = email]').type(data.email)
      cy.get('[name = password]').type(data.password)
    })

    cy.get('[type = submit]').contains('تسجيل الدخول').click()
});

// Define a custom Cypress command to log in to the Tenant application
Cypress.Commands.add("loginToTenant",()=>{

    cy.visit("https://msaaq-qa.msaaqdev.com/")

    cy.get('a').contains('تسجيل/دخول').click();
    
    // Load login credentials from the 'tenant' fixture file
    cy.fixture("tenant").then((data)=>{
      cy.get('[data-testid = auth_email-input]').type(data.email)
      cy.get('[data-testid = auth_login-button]').click()
      cy.get('[data-testid = auth_password-input]').type(data.password)
    })

    cy.get('[data-testid = auth_login-button]').click()
});



