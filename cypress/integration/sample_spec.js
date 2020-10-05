describe("Tests on MainView page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Clicks on card", () => {
    cy.get("[data-cy=oompaCard-1]").click();

    cy.url().should("include", "/1");
  });

  it("Scrolls down", () => {
    let initialElements = 0;

    cy.get(".grid")
      .find("article")
      .then((elm) => {
        initialElements = elm.length;
        return initialElements;
      });
    cy.get("[data-cy=gridBottom]").scrollIntoView();
    cy.wait(1500);
    cy.get(".grid")
      .find("article")
      .should((elm) => {
        expect(initialElements < elm.length).to.be.true;
      });
  });

  it("Searches initial cards", () => {
    cy.get("[data-cy=searchBar]").type("lia").should("have.value", "lia");
    cy.get("article").contains("lia");
  });
  it("Searches cards after scrolling", () => {
    cy.get("[data-cy=gridBottom]").scrollIntoView();
    cy.wait(1500);
    cy.scrollTo("top");
    cy.get("[data-cy=searchBar]").type("lia").should("have.value", "lia");
    cy.get("article").contains("lia");
  });
});

describe("Tests on DetailView page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Returns home", () => {
    cy.get("[data-cy=oompaCard-1]").click();

    cy.url().should("include", "/1");

    cy.get("[data-cy=headerLink]").click();

    cy.url().should("eq", "http://localhost:3000/");
  });
});
