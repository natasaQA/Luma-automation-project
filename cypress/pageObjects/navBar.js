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
    getGear(){
        return cy.get('#ui-id-6');
    }
    getFitness(){
      return cy.get('dd > .items > :nth-child(2) > a');
    }
    getBasketCounter(){
      return cy.get('.counter-number');
    }
    getProceedButton(){
      return cy.get("#top-cart-btn-checkout");
    }
}

export default NavBar;