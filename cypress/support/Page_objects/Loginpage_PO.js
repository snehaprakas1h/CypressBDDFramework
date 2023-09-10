/// <reference types="cypress"/>

import Base_PO from "./Base_PO";

class Loginpage_PO extends Base_PO {
  elements = {
    type_UName: () => cy.get("#text"),
    type_Pwd: () => cy.get("#password"),
    get_login: () => cy.get("#login-button"),
  };

  navigateTo_Login_Page() {
    super.navigate("Login-Portal/index.html");
  }

  type_Username(userName) {
    this.elements.type_UName().type(userName);
  }

  type_Password(password) {
    this.elements.type_Pwd().type(password);
  }

  clickOn_Login_Button() {
    this.elements.get_login().click();
  }

  assertAlertText(message) {
    cy.assertAlertText(message);
  }
}

export default Loginpage_PO;
