import { EzComponent } from "@gsilber/webez";
import html from "./product.component.html";
import css from "./product.component.css";

export class ProductComponent extends EzComponent {
    constructor() {
        super(html, css);
    }
}
