Cypress.Commands.add("validateHomeTitle", () => {
  cy.visit("/");  
  cy.get("h3.sq-site-title").should("be.visible");
  cy.contains("h3.sq-site-title a", "AcademyBugs.com")
    .should("be.visible")
    .and("have.attr", "href", "https://academybugs.com/");
});

