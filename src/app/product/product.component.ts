import {
    BindValueToNumber,
    Click,
    EventSubject,
    EzComponent,
} from "@gsilber/webez";
import html from "./product.component.html";
import css from "./product.component.css";

export class ProductComponent extends EzComponent {
    removeEvent: EventSubject = new EventSubject();
    plus: EventSubject = new EventSubject();
    dec: EventSubject = new EventSubject();
    total: EventSubject<number> = new EventSubject<number>();
    protected numstore: number = 13.5;

    @BindValueToNumber("num")
    protected number: number = 1;

    @BindValueToNumber("priced")
    protected price: number = 13.5;

    constructor() {
        super(html, css);
    }

    @Click("removed")
    removeitem() {
        this.removeEvent.next();
        this.total.next(this.numstore);
    }

    @Click("inc")
    increment() {
        this.number++;
        this.price += 13.5;
        this.numstore += 13.5;
        this.plus.next();
    }

    @Click("dec")
    decrement() {
        if (this.number > 1) {
            this.number--;
            this.price -= 13.5;
            this.numstore -= 13.5;
            this.dec.next();
        } else {
            return;
        }
    }
}
