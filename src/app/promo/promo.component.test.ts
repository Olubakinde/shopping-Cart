import { describe, expect, test, beforeAll } from "@jest/globals";
import { PromoComponent } from "./promo.component";
import { bootstrap } from "@gsilber/webez";

describe("PromoComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<PromoComponent>(PromoComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(PromoComponent);
        });
    });
});
