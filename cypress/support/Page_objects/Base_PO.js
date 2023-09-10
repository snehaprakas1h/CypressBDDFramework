/// <reference types="cypress"/>

class Base_PO {
  navigate(path) {
    cy.fixture("Config.json").then((data) => {
      cy.visit(data.baseUrl + path);
    });
  }
}

export default Base_PO;
