


class Checkout{
    visit() {
        cy.visit(
          "https://magento.softwaretestingboard.com/checkout/#shipping"
        );
      }
      getNextButton(){
        return cy.get('.button')   //cy.get('button[data-role="opc-continue"]');
     }
      getOrderButton(){
        return cy.get('.payment-method-content > :nth-child(4) > div.primary > .action');
     }
      getSuccessfullPurchaseMessage(){
        return cy.get('.base');
     }

}
export default Checkout;