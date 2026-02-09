describe("Acessibilidade - AcademyBugs", () => {
  it("Página inicial deve estar conforme WCAG", () => {
    cy.visit("/");
    cy.injectAxe();
    cy.checkA11y(
      null,
      null,
      (violations) => {
        cy.task(
          "log",
          `${violations.length} accessibility violations detected`
        );
        const violationData = violations.map(
          ({ id, impact, description, nodes }) => ({
            id,
            impact,
            description,
            nodes: nodes.length,
          })
        );
        cy.task("table", violationData);
      },
      true
    );
  });
});
