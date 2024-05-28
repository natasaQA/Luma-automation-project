class RegistrationPage {
  visit() {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
  }

  getFirstName() {
    return cy.get("#firstname");
  }

  getLastName() {
    return cy.get("#lastname");
  }

  getEmail() {
    return cy.get("#email_address");
  }

  getPasswordCreate() {
    return cy.get("#password");
  }

  getConfirmPassword() {
    return cy.get("#password-confirmation");
  }

  getCreateAccButton() {
    return cy.get(
      "#form-validate > .actions-toolbar > div.primary > .action > span"
    );
  } // Successfull message
  getSuccessfullMessage() {
    return cy.get("div.page.messages");
  } //Error messages
  getFirstNameError() {
    return cy.get("#firstname-error");
  }
  getLastNameError() {
    return cy.get("#lastname-error");
  }
  getEmailError() {
    return cy.get("#email_address-error");
  }
  getPasswordError() {
    return cy.get("#password-error");
  }
  getConfirmError() {
    return cy.get("#password-confirmation-error");
  }
}

export default RegistrationPage;
