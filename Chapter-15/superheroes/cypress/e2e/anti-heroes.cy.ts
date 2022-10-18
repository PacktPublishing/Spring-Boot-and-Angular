/// <reference types="cypress"/>

describe("Login Page", () => {
  beforeEach(() => {
    cy.fixture("anti-heroes").then(function (data) {
      /* register custom commands. */
      cy.getCommand("/api/v1/anti-heroes", data);
      cy.deleteCommand("/api/v1/anti-heroes/*");
    });

    cy.visit("/");
    cy.fixture("user").then((data: { email: string; password: string }) => {
      cy.get("[data-cy=email]").type(data.email);
      cy.get("[data-cy=password]").type(data.password);
      cy.get("[data-cy=submit-login]").click();
    });
  });

  afterEach(() => {
    cy.get("[data-cy=logout]").click();
  });

  // simple test
  it.skip("should display login page", () => {
    cy.visit("/");
    cy.url().should("include", "/login");
    cy.get("[data-cy=auth-title]").should("contain", "Login");
  });

  it("should display logo", () => {
    cy.get("[data-cy=logo]").should("contain", "Angular CRUD");
  });

  it("should render anti-heroes", () => {
    cy.fixture("anti-heroes").then(function (data) {
      cy.get("[data-cy=row]").should("have.length", 24);
    });
  });

  it("should remove a card after clicking a delete button", () => {
    const index = 1;
    cy.get("[data-cy=delete]").eq(index).click();
    cy.get("[data-cy=row]").should("have.length", 20);
  });

  it("should add a new hero", () => {
    const firstName = "Bucky";
    const lastName = "Barnes";
    const house = "Marvel";
    const knownAs = "The Winter Soldier";

    cy.get("[data-cy=create]").click();
    cy.get("[data-cy=firstName]").type(firstName);
    cy.get("[data-cy=lastName]").type(lastName);
    cy.get("[data-cy=house]").type(house);
    cy.get("[data-cy=knownAs]").type(knownAs);

    cy.postCommand("/api/v1/anti-heroes", {
      firstName,
      lastName,
      house,
      knownAs,
    });

    cy.get("[data-cy=action]").click();
    cy.fixture("anti-heroes").then(function (data) {
      cy.get("[data-cy=row]").should("have.length", 24);
    });
  });
});
