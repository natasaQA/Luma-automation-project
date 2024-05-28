import RegistrationPage from "../pageObjects/registrationPage";

describe("Testing registration form functionality", () => {
  beforeEach(() => {
    cy.fixture('testData').as('testData');
   
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
  });

  it("TC1: validate that user can successfully register using valid inputs", () => {
    cy.get('@testData').then((data) => {
    const registrationPage = new RegistrationPage();
    registrationPage.getFirstName().click().type(data.name);
    registrationPage.getLastName().type(data.lastName);

    cy.generateRandomEmail().then((randomEmail) => {
      cy.get("#email_address").type(randomEmail);
    });
    registrationPage.getPasswordCreate().type(data.password);
    registrationPage.getConfirmPassword().type(data.password);
    registrationPage.getCreateAccButton().click();
    registrationPage
      .getSuccessfullMessage()
      .should("contain", "Thank you for registering with Main Website Store.");
  });
});

  it("TC2: validate that user cannot register without filling all mandatory fileds", () => {
    const registrationPage = new RegistrationPage();
    registrationPage.getCreateAccButton().click();
    registrationPage
      .getFirstNameError()
      .should("contain", "This is a required field.");
    registrationPage
      .getLastNameError()
      .should("contain", "This is a required field.");
    cy.wait(6000);
    registrationPage
      .getEmailError()
      .should("contain", "This is a required field.");
    cy.wait(6000);
    registrationPage
      .getPasswordError()
      .should("contain", "This is a required field.");
    cy.contains("Password Strength: No Password").should("be.visible");
    registrationPage
      .getConfirmError()
      .should("contain", "This is a required field.");
  });

  it("TC3: validate that the user cannot register if the password don't match", () => {
    cy.get('@testData').then((data) => {
    const registrationPage = new RegistrationPage();
    registrationPage.getFirstName().click().type(data.name);
    registrationPage.getLastName().type(data.lastName);

    cy.generateRandomEmail().then((randomEmail) => {
      cy.get("#email_address").type(randomEmail);
    });
    registrationPage.getPasswordCreate().type(data.password);
    registrationPage.getConfirmPassword().type("First123");
    registrationPage.getCreateAccButton().click();
    registrationPage
      .getConfirmError()
      .should("contain", "Please enter the same value again.");
  });
});

  it("TC4: validate that user cannot register multiple times with same data", () => {
    cy.get('@testData').then((data) => {
    const registrationPage = new RegistrationPage();
    registrationPage.getFirstName().type(data.name);
    registrationPage.getLastName().type(data.lastName);
    registrationPage.getEmail().type(data.email);
    registrationPage.getPasswordCreate().type(data.password);
    registrationPage.getConfirmPassword().type(data.password);
    registrationPage.getCreateAccButton().click();
  });
});
});
