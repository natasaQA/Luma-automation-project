import SignInPage from "../pageObjects/signInPage";
import NavBar from "../pageObjects/navBar";
import WomenPage from "../pageObjects/womenPage";
import Checkout from "..//pageObjects/checkout";
import MenPage from "..//pageObjects/menPage";

describe("Purchase Tests",()=>{
    const signInPage = new SignInPage();
    const navBar = new NavBar();
    const womenPage = new WomenPage();
    const checkout = new Checkout();
    const menPage = new MenPage(); 
beforeEach(()=>{
    
    cy.fixture("testData").then((testData)=>{
        cy.login(testData.email, testData.password);
       
    
    });
});

it("TC1: Validate that user can order the second purple M size top and the first matching bottom",()=>{
navBar.getWoman().click();
womenPage.getAllTops().click();
womenPage.getTop().click();
womenPage.getMsizeTop().click();
womenPage.getPurpleColour().click();
womenPage.getAddToCartButton().click();
navBar.getBasketCounter().should('exist').and('be.visible').should("contain","1");
navBar.getWoman().click();
womenPage.getAllBottoms().click();
womenPage.getShort().click();
womenPage.getSizeShort().click();
womenPage.getPurpleColour().click();
womenPage.getAddToCartButton().click();
navBar.getBasketCounter().should("contain","2");
navBar.getBasketCounter().click();
navBar.getProceedButton().click();
checkout.getNextButton().should('be.visible').click();
checkout.getOrderButton().should('be.visible').click();
cy.wait(6000)
checkout.getSuccessfullPurchaseMessage().should("contain","Thank you for your purchase!");



})

it("TC2: Validate that user can add multiple articles from different categories", ()=> {

navBar.getMen().click();
menPage.getHoodies().should('be.visible').click();
menPage.getHoodieArticle().should('be.visible').click();
menPage.getSizeL().click();
menPage.getColorGreen().click();
menPage.getQty().clear().type("2");
womenPage.getAddToCartButton().click();
navBar.getWoman().click();
womenPage.getBras().click();
womenPage.getPrimaBra().click();
womenPage.getMsizeTop().click();
womenPage.getYellowColor().click();
womenPage.getAddToCartButton().click();
womenPage.getXSsize().click();
womenPage.getBlueColor().click();
menPage.getQty().clear().type("3");
cy.wait(6000);
womenPage.getAddToCartButton().click();
})



});