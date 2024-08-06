import { describe, expect, test, beforeAll } from "@jest/globals";
import { Product3Component } from "./product3.component";
import { bootstrap } from "@gsilber/webez";

describe("Product3Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Product3Component>(Product3Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Product3Component);
        });
    });
});
