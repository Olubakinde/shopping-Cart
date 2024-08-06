import { describe, expect, test, beforeAll } from "@jest/globals";
import { ShopListComponent } from "./shop-list.component";
import { bootstrap } from "@gsilber/webez";

describe("ShopListComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<ShopListComponent>(ShopListComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(ShopListComponent);
        });
    });
});
