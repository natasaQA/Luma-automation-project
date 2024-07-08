class MenPage{
visit(){
    cy.visit("https://magento.softwaretestingboard.com/men.html");
}
getHoodieArticle(){
    return cy.get('.products > :nth-child(7)')
}
getHoodies(){
    return cy.get('.categories-menu > :nth-child(2) > :nth-child(1)');
}
getSizeL(){
    return cy.get('#option-label-size-143-item-169');
}
getColorGreen(){
    return cy.get('#option-label-color-93-item-53');
}
getQty(){
    return cy.get('#qty');
}

}
export default MenPage;