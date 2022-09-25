/// <reference types="cypress"/>

describe("Login Page", () => {
    beforeEach(() => {
        cy.fixture("user").then(function (data) {
            /* register custom commands. */

        });
        /* go to root domain */
        cy.visit("/");
    });
    it("should navigate to login", () => {
        cy.url().should("include", "/login");
    });
    it("should display logo", () => {
        cy.get("[data-cy=logo]").should("contain", "Angular CRUD");
    });
});
