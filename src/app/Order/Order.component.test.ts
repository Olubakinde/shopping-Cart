import { describe, expect, test, beforeAll } from "@jest/globals";
import { OrderComponent } from "./Order.component";
import { bootstrap } from "@gsilber/webez";

describe("OrderComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<OrderComponent>(OrderComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(OrderComponent);
        });
    });
});
