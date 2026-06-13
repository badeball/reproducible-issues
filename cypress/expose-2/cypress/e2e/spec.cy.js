let attempt = 1;

it("should work", { expose: { obj: { foo: "foo" } }, env: { obj: { foo: "foo" } } }, () => {
  if (attempt++ === 1) {
    expect(Cypress.env("obj").foo).to.equal("foo");
    expect(Cypress.expose("obj").foo).to.equal("foo");
  } else {
    expect(Cypress.env("obj").foo).to.equal("bar");
    expect(Cypress.expose("obj").foo).to.equal("bar"); // Fails
  }

  throw "some error";
});

afterEach(() => {
  Cypress.env("obj").foo = "bar";
  Cypress.expose("obj").foo = "bar";
});
