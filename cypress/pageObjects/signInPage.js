class SignInPage {
    visit() {
      cy.visit(
        "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"
      );
    
    }
  
    getEmail() {
      return cy.get("#email");
    }
  
    getPassword() {
      return cy.get("#pass");
    }
  
    getSignInButton() {
      return cy.get("#send2");
    }

    getLoggedInMessage(){
        return cy.get(".logged-in");
    }
    getErrorMessage(){
        return cy.get('.message-error');
    }
    
  }
  
  export default SignInPage;
  