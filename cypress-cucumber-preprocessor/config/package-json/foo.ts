import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.visit("https://duckduckgo.com/");
  cy.wait(1000)
});

Then("I should see a search bar", () => {
  cy.get("input:visible").should(
    "have.attr",
    "placeholder",
    "Search without being tracked"
  );
});
