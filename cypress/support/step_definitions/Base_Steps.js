/// <reference types="cypress"/>
import {
  When,
  Then,
  Before,
  After,
} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.log("Executes before each scenario/test");
  cy.clearAllLocalStorage();
});

Before({ tags: "@smoke" }, () => {
  cy.log("Executes smoke pack");
});

After(() => {
  cy.log("Executes after each Scenario/Test");
});

When("I wait for {int} seconds", (seconds) => {
  cy.wait(seconds * 1000);
});
