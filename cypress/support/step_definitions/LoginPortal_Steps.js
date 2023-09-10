/// <reference types="cypress"/>
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Loginpage_PO from "../Page_objects/Loginpage_PO";

const loginPage = new Loginpage_PO()

Given("I navigate to webdriveruniversity login page",()=>{
  loginPage.navigateTo_Login_Page();
})

When("I type username {string}", (userName) => {
  loginPage.type_Username(userName);
 
});

When("I type password {string}", (password) => {
  loginPage.type_Password(password);
  
});

When("I click on login button", () => {
  loginPage.clickOn_Login_Button();
});

Then("I should be presented with message in an alert box {string}", (message) => {
  loginPage.assertAlertText(message);
});
