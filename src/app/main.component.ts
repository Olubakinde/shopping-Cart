import html from "./main.component.html";
import css from "./main.component.css";
import { EzComponent } from "@gsilber/webez";
import { DisplayComponent } from "./display/display.component";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    protected dis: DisplayComponent = new DisplayComponent();

    constructor() {
        super(html, css);
        this.addComponent(this.dis, "display");
    }
}
