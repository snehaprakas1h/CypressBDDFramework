/// <reference types="cypress"/>
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "http://www.webdriveruniversity.com/";

Given("I navigate to the webdriver university homepage", () => {
  cy.visit(url);
});

When("I click on contact us button", () => {
  cy.get("#contact-us").invoke("removeAttr", "target").click(); //to open a link in the same tab
});

When("I click on login portal button", () => {
    cy.get("#login-portal").invoke("removeAttr", "target").click(); //to open a link in the same tab
  });
