/// <reference types="cypress"/>
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { xpath } from "cypress-xpath";

When("I type a first name", () => {
  cy.get("input[name='first_name']").type("John");
});

When("I type a last name", () => {
  cy.get("input[name='last_name']").type("Doe");
});

When("I enter an email address", () => {
  cy.get("input[name='email']").type("Doe@gmail.com");
});

When("I type a comment", () => {
  cy.get("textarea[name='message']").type("this is a comment");
});

When("I click on submit button", () => {
  cy.get("input[type='submit']").click();
});

Then(
  "I should be presented with a successful contact us submission message",
  () => {
    cy.get("h1").should("have.text", "Thank You for your Message!");
  }
);

Then(
  "I should be presented with a unsuccessful contact us submission message",
  () => {
    cy.get("body").contains("Error: Invalid email address");
  }
);

When("I type a first name {string}", (firstname) => {
  cy.get("input[name='first_name']").type(firstname);
});

When("I type a last name {string}", (lastname) => {
  cy.get("input[name='last_name']").type(lastname);
});

When("I enter an email address {string}", (email) => {
  cy.get("input[name='email']").type(email);
});

When(
  "I type a comment {string} and number {int} within comment input field",
  (comment, number) => {
    cy.get("textarea[name='message']").type(comment + " " + number);
  }
);

When(
  "I type a first name {string} and a last name {string}",
  (firstName, lastName) => {
    cy.get("input[name='first_name']").type(firstName);
    cy.get("input[name='last_name']").type(lastName);
  }
);

When(
  "I type a email address {string} and add a comment {string}",
  (email, comment) => {
    cy.get("input[name='email']").type(email);
    cy.get("textarea[name='message']").type(comment);
  }
);

Then("I should be presented with header text {string}", (message) => {
  cy.xpath("//h1 | //body").contains(message);
});
