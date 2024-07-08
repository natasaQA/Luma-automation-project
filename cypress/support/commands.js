// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//

import SignInPage from "../pageObjects/signInPage";

// Generate random email command 
Cypress.Commands.add("generateRandomEmail", () => {
  const randomString = Math.random().toString(36).substring(2, 11);
  const randomEmail = `testuser_${randomString}@example.com`;
  return randomEmail;
});

Cypress.Commands.add('login', (email, password)=>{
  cy.fixture('testData').as('testData');
      cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/");
      cy.get('@testData').then((data) => {
        const signInPage = new SignInPage()
        signInPage.getEmail().type(data.email);
        signInPage.getPassword().type(data.password)
        signInPage.getSignInButton().click();
        cy.wait(6000);
        signInPage.getLoggedInMessage().should("contain", "Welcome, Marta Miller!");
});
});



//Explanation:
//   Math.random():

// This generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
// Example output: 0.123456789.
// .toString(36):

// The toString method converts a number to a string. When used with a radix (or base) of 36, it converts the number into a base-36 representation, which uses digits 0-9 and letters a-z.
// This effectively creates a string containing both numbers and lowercase letters.
// Example: 0.123456789.toString(36) might produce "0.4fzyo82r5".
// .substring(2, 11):

// The substring method extracts a part of the string between the specified indices.
// 2 is the start index (inclusive), and 11 is the end index (exclusive).
// This means it takes characters starting from index 2 up to index 10, giving us 9 characters in total.
// The reason we start from index 2 is to skip the 0. at the beginning of the base-36 string representation.
// Example: "0.4fzyo82r5".substring(2, 11) results in "4fzyo82r5".
// Putting It All Together:
// When you combine these steps, the function:

// Generates a random floating-point number.
// Converts it to a base-36 string, which includes digits and letters.
// Extracts a 9-character substring starting after the 0. prefix.

//SUMA SUMARUM:
