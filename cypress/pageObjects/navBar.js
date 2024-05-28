class NavBar {
    visit() {
      cy.visit(
        "https://magento.softwaretestingboard.com/customer/account/create/"
      );
    }
  
    getWoman() {
      return cy.get("#ui-id-4");
    }
    getWhatsNew(){
        return cy.get("#ui-id-3");
    }
    getMen(){
        return cy.get("#ui-id-5");
    }
    getTraining(){
        return cy.get("#ui-id-7");
    }
    getSale(){
        return cy.get("#ui-id-8");
    }
    getBasketCounter(){
      return cy.get('.counter-number');
    }
    getProceedButton(){
      return cy.get("#top-cart-btn-checkout");
    }
}

export default NavBar;