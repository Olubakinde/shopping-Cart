import {
    BindValueToNumber,
    Click,
    EventSubject,
    EzComponent,
} from "@gsilber/webez";
import html from "./product3.component.html";
import css from "./product3.component.css";

export class Product3Component extends EzComponent {
    removeEvent: EventSubject = new EventSubject();
    plus: EventSubject = new EventSubject();
    dec: EventSubject = new EventSubject();
    total: EventSubject<number> = new EventSubject<number>();
    protected numstore: number = 24.5;

    @BindValueToNumber("num")
    protected number: number = 1;

    @BindValueToNumber("priced")
    protected price: number = 24.5;

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
        this.price += 24.5;
        this.numstore += 24.5;
        this.plus.next();
    }

    @Click("dec")
    decrement() {
        if (this.number > 1) {
            this.number--;
            this.price -= 24.5;
            this.numstore -= 24.5;
            this.dec.next();
        } else {
            return;
        }
    }
}
