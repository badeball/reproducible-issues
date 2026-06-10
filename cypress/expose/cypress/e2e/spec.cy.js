const env = { obj: { foo: "foo" } }
const expose = { obj: { foo: "foo" } }

it("should work", { env, expose }, () => {
  env.obj.bar = "bar";
  expose.obj.bar = "bar"
});

afterEach(() => {
  expect(Cypress.env("obj").bar).to.equal("bar");
  expect(Cypress.expose("obj").bar).to.equal("bar");
});
