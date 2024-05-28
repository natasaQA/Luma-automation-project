import SignInPage from "../pageObjects/signInPage";
import NavBar from "../pageObjects/navBar";
import WomenPage from "../pageObjects/womenPage";
import Checkout from "..//pageObjects/checkout";

describe("Purchase Tests",()=>{
    const signInPage = new SignInPage();
    const navBar = new NavBar();
    const womenPage = new WomenPage();
    const checkout = new Checkout();
beforeEach(()=>{
    //const signInPage = new SignInPage();
    cy.fixture("testData").then((testData)=>{
        cy.login(testData.email, testData.password);
        signInPage.getLoggedInMessage().should("contain", "Welcome, Marta Miller!");
    });
});

it("TC1: Validate that user can order the second purple M size top and the first matching bottom",()=>{
   
navBar.getWoman().click();
womenPage.getAllTops().click();
womenPage.getTop().click();
womenPage.getMsizeTop().click();
womenPage.getPurpleColour().click();
womenPage.getAddToCartButton().click();
navBar.getBasketCounter().should("be.visible").should("contain","1");
navBar.getWoman().click();
womenPage.getAllBottoms().click();
womenPage.getShort().click();
womenPage.getSizeShort().click();
womenPage.getPurpleColour().click();
womenPage.getAddToCartButton().click();
navBar.getBasketCounter().should("contain","2");
navBar.getBasketCounter().click();
navBar.getProceedButton().click();
cy.wait(6000);
checkout.getNextButton().should('be.visible').click();
checkout.getOrderButton().should('be.visible').click();
checkout.getSuccessfullPurchaseMessage().should("contain","Thank you for your purchase!");



})



});