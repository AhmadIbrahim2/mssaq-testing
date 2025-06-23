
declare global {
  namespace Cypress {
    interface Chainable {
      loginToDashboard(): Chainable<void>;
      loginToTenant(): Chainable<void>;
    }
  }
}

export {};