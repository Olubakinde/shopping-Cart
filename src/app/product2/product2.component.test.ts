import { describe, expect, test, beforeAll } from "@jest/globals";
import { Product2Component } from "./product2.component";
import { bootstrap } from "@gsilber/webez";

describe("Product2Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Product2Component>(Product2Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Product2Component);
        });
    });
});
