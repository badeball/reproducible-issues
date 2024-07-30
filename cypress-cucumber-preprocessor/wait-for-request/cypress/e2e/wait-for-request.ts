import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit the site", () => {
  cy.visit("./index.html");
});

When("I intercept a POST request", () => {
  cy.intercept({
    method: "POST", 
    path: "/api/foo",
    times: 1
  }, (req) => {
    expect(req.body).to.equal("bar");
  }).as("request");
});

When("I press send", () => {
  cy.get("button").click();
});

Then("the request should be fulfilled", () => {
  cy.wait('@request');
});
