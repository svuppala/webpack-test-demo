describe("Application", () => {
  it("Shows a text", () => {
    cy.visit("/");
    cy.get(".app-content").should("have.text", "Hello World");
  });
});
