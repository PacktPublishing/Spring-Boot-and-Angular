// @ts-check
///<reference path="../global.d.ts" />
/// <reference types="cypress"/>
import { v4 as uuidv4 } from "uuid";

Cypress.Commands.add("getCommand", (url: string, responseBody: Array<any>) => {
    cy.intercept("GET", url, {
        statusCode: 200,
        body: responseBody,
    });
});

Cypress.Commands.add("deleteCommand", (url: string) => {
    cy.intercept("DELETE", url, {
        statusCode: 200,
    });
});

Cypress.Commands.add("postCommand", (url: string, requestBody: any) => {
    requestBody.id = uuidv4();

    cy.intercept("POST", url, {
        statusCode: 201,
        body: requestBody,
    });
});
