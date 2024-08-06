import { describe, expect, test, beforeAll } from "@jest/globals";
import { ProductComponent } from "./product.component";
import { bootstrap } from "@gsilber/webez";

describe("ProductComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<ProductComponent>(ProductComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(ProductComponent);
        });
    });
});
