/// <reference types="cypress"/>
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { xpath } from "cypress-xpath";
import Contact_Us_PO from "../Page_objects/Contact_Us_PO";

const contactUsPage = new Contact_Us_PO();

When("I type a first name", () => {
  //cy.get("input[name='first_name']").type("John");
  contactUsPage.type_Firstname("John");
});

When("I type a last name", () => {
  //cy.get("input[name='last_name']").type("Doe");
  contactUsPage.type_Lastname("Doe");
});

When("I enter an email address", () => {
  //cy.get("input[name='email']").type("Doe@gmail.com");
  contactUsPage.type_EmailAddress("Doe@gmail.com");
});

When("I type a comment", () => {
  //cy.get("textarea[name='message']").type("this is a comment");
  contactUsPage.type_Comment("hello");
});

When("I click on submit button", () => {
  //cy.get("input[type='submit']").click();
  contactUsPage.clickOn_Submit_Button();
});

Then(
  "I should be presented with a successful contact us submission message",
  () => {
    //cy.get("h1").should("have.text", "Thank You for your Message!");
    contactUsPage.validate_Submission_Header("Thank You for your Message!");
  }
);

Then(
  "I should be presented with a unsuccessful contact us submission message",
  () => {
    //cy.get("body").contains("Error: Invalid email address");
    contactUsPage.validate_Submission_Header("Error: Invalid email address");
  }
);

When("I type a first name {string}", (firstname) => {
  //cy.get("input[name='first_name']").type(firstname);
  contactUsPage.type_Firstname(firstname);
});

When("I type a last name {string}", (lastname) => {
  //cy.get("input[name='last_name']").type(lastname);
  contactUsPage.type_Lastname(lastname);
});

When("I enter an email address {string}", (email) => {
  //cy.get("input[name='email']").type(email);
  contactUsPage.type_EmailAddress(email);
});

When(
  "I type a comment {string} and number {int} within comment input field",
  (comment, number) => {
    //cy.get("textarea[name='message']").type(comment + " " + number);
    contactUsPage.type_Comment(comment + " " + number);
  }
);

When(
  "I type a first name {string} and a last name {string}",
  (firstName, lastName) => {
    // cy.get("input[name='first_name']").type(firstName);
    // cy.get("input[name='last_name']").type(lastName);

    contactUsPage.type_Firstname(firstName);
    contactUsPage.type_Lastname(lastName);
  }
);

When(
  "I type a email address {string} and add a comment {string}",
  (email, comment) => {
    // cy.get("input[name='email']").type(email);
    // cy.get("textarea[name='message']").type(comment);
    contactUsPage.type_EmailAddress(email);
    contactUsPage.type_Comment(comment);
  }
);

Then("I should be presented with header text {string}", (message) => {
  //cy.xpath("//h1 | //body").contains(message);
  contactUsPage.validate_Submission_Header(message);
});
