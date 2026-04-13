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

Cypress.env("userEmail", "")
Cypress.env("userPassword", "123456")

Cypress.Commands.add("login", (email, password) => {
  cy.visit("https://automationexercise.com/login");
  cy.get("input[data-qa='login-email']").type(email);
  cy.get("input[data-qa='login-password']").type(password);
  cy.get("button[data-qa='login-button']").click();
});

Cypress.Commands.add("addProductToCart", () => {
  cy.visit("https://automationexercise.com/products");
  cy.get(".product-image-wrapper").first().contains("Add to cart").click();
  cy.visit("https://automationexercise.com/view_cart");
});

