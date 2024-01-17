const links = [
  { text: "Product", href: "/app" },
  { text: "Docs", href: "https://on.cypress.io/" },
  { text: "Community", href: "/blog" },
  { text: "Company", href: "/blog/category/Company" },
  { text: "Pricing", href: "/pricing" },
];

const repeatFactor = 100;

it("should work", () => {
  cy.visit("/");

  const repeatedLinks = Array.from(
    { length: repeatFactor },
    () => links
  ).flat();

  for (const link of repeatedLinks) {
    const element = cy.contains("a", link.text);

    element.should("contain.text", link.text);
    element.should("have.attr", "href", link.href);
  }

  cy.task("foobar");
});
