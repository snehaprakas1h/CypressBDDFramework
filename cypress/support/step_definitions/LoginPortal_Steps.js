/// <reference types="cypress"/>
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When("I type username {string}", (userName) => {
  cy.get("#text").type(userName);
});

When("I type password {string}", (password) => {
  cy.get("#password").type(password);
});

When("I click on login button", () => {
  cy.get("login-button").click();
});

Then("I should be presented with message in an alert box {string}", (message) => {
  cy.on("window:alert", (str) => {
    expect(str).to.equal(message);
  });
});
