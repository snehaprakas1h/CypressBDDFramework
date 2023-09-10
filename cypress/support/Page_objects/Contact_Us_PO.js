/// <reference types="cypress"/>

import Base_PO from "./Base_PO";

class Contact_Us_PO extends Base_PO {
  elements = {
    comment_TextField: () => cy.get("textarea[name='message']"),
    type_Email: () => cy.get("input[name='email']"),
    type_FName: () => cy.get("input[name='first_name']"),
    type_LName: () => cy.get("input[name='last_name']"),
    submission_Header_Text: () => cy.xpath("//h1 | //body"),
    submit_Button: () => cy.get("input[type='submit']"),
  };

  navigateTo_ContactUs_Page() {
    super.navigate("/Contact-Us/contactus.html");
  }

  type_Firstname(firstName) {
    this.elements.type_FName().type(firstName);
  }

  type_Lastname(lastName) {
    this.elements.type_LName().type(lastName);
  }

  type_EmailAddress(emailAddress) {
    this.elements.type_Email().type(emailAddress);
  }

  type_Comment(comment) {
    this.elements.comment_TextField().type(comment);
  }

  clickOn_Submit_Button() {
    this.elements.submit_Button().click();
  }

  validate_Submission_Header(expectedText) {
    this.elements.submission_Header_Text().contains(expectedText);
    this.elements
      .submission_Header_Text()
      .invoke("text")
      .should("include", expectedText);
  }
}

export default Contact_Us_PO;
