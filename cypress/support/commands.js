Cypress.Commands.add("validateHomeTitle", () => {
  cy.visit("/");  
  cy.get("h3.sq-site-title").should("be.visible");
});
