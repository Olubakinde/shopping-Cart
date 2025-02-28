import {
    BindDisabledToBoolean,
    Click,
    EventSubject,
    EzComponent,
} from "@gsilber/webez";
import html from "./shop-list.component.html";
import css from "./shop-list.component.css";

export class ShopListComponent extends EzComponent {
    clickEvent: EventSubject = new EventSubject();
    clickEvent2: EventSubject = new EventSubject();
    clickEvent3: EventSubject = new EventSubject();

    @BindDisabledToBoolean("faceCream")
    protected bool1: boolean = false;

    @BindDisabledToBoolean("FaceOil")
    protected bool2: boolean = false;

    @BindDisabledToBoolean("sunscreen")
    protected bool3: boolean = false;

    constructor() {
        super(html, css);
    }

    @Click("faceCream")
    faceCream() {
        this.clickEvent.next();
    }

    @Click("FaceOil")
    faceOil() {
        this.clickEvent2.next();
    }

    @Click("sunscreen")
    sunscreen() {
        this.clickEvent3.next();
    }
}
