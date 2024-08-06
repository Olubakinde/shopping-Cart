import { Click, EzComponent } from "@gsilber/webez";
import html from "./display.component.html";
import css from "./display.component.css";
import { ProductComponent } from "../product/product.component";
import { ShopListComponent } from "../shop-list/shop-list.component";

export class DisplayComponent extends EzComponent {
    protected prod: ProductComponent = new ProductComponent();
    protected shopp: ShopListComponent = new ShopListComponent();
    constructor() {
        super(html, css);
        this.addComponent(this.prod, "product");
    }

    @Click("pay-now2")
    shop() {
        this.addComponent(this.shopp, "Shop");
    }
}
