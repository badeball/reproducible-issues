cy.get("div")
  .then($div => $div[0])
  .then($div =>
    $div // $ExpectType JQuery<HTMLDivElement>
  );
