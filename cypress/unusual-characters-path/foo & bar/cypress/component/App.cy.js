import App from "../../src/App";

it("should work", () => {
  cy.mount(<App />);

  cy.contains("Hello world!").should("exist");
})
