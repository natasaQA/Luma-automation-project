class WomenPage {
    visit() {
      cy.visit(
        "https://magento.softwaretestingboard.com/women.html"
      );
    }
    getAllTops(){
      return cy.get('dd > .items > :nth-child(1) > a');
    }
    getTop(){
      return cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo');
    }
    getMsizeTop(){
      return cy.get('#option-label-size-143-item-168');
    }
    getPurpleColour(){
      return cy.get('#option-label-color-93-item-57');
    }
    getAddToCartButton(){
      return cy.get('#product-addtocart-button');
    
    }
    getAllBottoms(){
      return cy.get('dd > .items > :nth-child(2) > a');
    }
    getShort(){
      return cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo');
    }
    getSizeShort(){
      return cy.get('#option-label-size-143-item-173');

    }
    getNextButton(){
           return cy.get('.button');
       }
    getOrderButton(){
      return cy.get('.payment-method-content > :nth-child(4) > div.primary > .action');
    }

  
}
export default WomenPage;