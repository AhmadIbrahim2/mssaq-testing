declare namespace Cypress {
  interface Chainable<Subject = any> {
    realClick(options?: Partial<MouseEventInit>): Chainable<Subject>;
  }
}