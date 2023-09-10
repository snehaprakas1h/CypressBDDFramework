/// <reference types="cypress"/>
import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../Page_objects/Base_PO";
import Homepage_PO from "../Page_objects/Homepage_PO";

const basePage = new Base_PO();
const homePage = new Homepage_PO();

Before(() => {
  cy.log("Executes before each scenario/test in homepage steps");
});

Given("I navigate to the webdriver university homepage", () => {
  homePage.navigateToHomePage();
});

When("I click on contact us button", () => {
  homePage.clickOn_ContactUs_Button();
});

When("I click on login portal button", () => {
  homePage.clickOn_LoginPortal_Button();
});
