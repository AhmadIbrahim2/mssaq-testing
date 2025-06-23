// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import "cypress-real-events/support";

// Listen to uncaught exceptions in Cypress tests
Cypress.on('uncaught:exception', (err) => {
  // Ignore specific React minified errors that we expect and don't want to fail the test
  if (
    err.message.includes('Minified React error #418') || 
    err.message.includes('Minified React error #329') || 
    err.message.includes('Minified React error #423')
  ) {
    // Returning false prevents Cypress from failing the test on these errors
    return false;
  }
});
