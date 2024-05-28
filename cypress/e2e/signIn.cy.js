import SignInPage from "../pageObjects/signInPage";

describe("Testing sign in functionality", () => {
    beforeEach(() => {
      cy.fixture('testData').as('testData');
      cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/");
    });

    it("TC1: Validate that user can successfully login using valid inputs",()=>{
      cy.get('@testData').then((data) => {
        const signInPage = new SignInPage();
        signInPage.getEmail().type(data.email);
        signInPage.getPassword().type(data.password)
        signInPage.getSignInButton().click();
        signInPage.getLoggedInMessage().should("contain", "Welcome, Marta Miller!");
      });
    });

    it("TC2: Validate that user cannot login without inserting any data",()=>{
      const signInPage = new SignInPage();
      signInPage.getSignInButton().click();
      cy.wait(6000);
      signInPage.getErrorMessage().should("contain","A login and a password are required.");
    });

    it("TC3: Validate that user cannot login without inserting correct password",()=>{
      cy.get('@testData').then((data) => {
        const signInPage = new SignInPage();
        signInPage.getEmail().type(data.email);
        signInPage.getPassword().type("First1");
        signInPage.getSignInButton().click();
        signInPage.getErrorMessage().should("contain","The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
    });
    });
});

