import {
    BindValueToNumber,
    Click,
    EventSubject,
    EzComponent,
} from "@gsilber/webez";
import html from "./product2.component.html";
import css from "./product2.component.css";

export class Product2Component extends EzComponent {
    removeEvent: EventSubject = new EventSubject();
    plus: EventSubject = new EventSubject();
    dec: EventSubject = new EventSubject();
    total: EventSubject<number> = new EventSubject<number>();
    protected numstore: number = 19.5;

    @BindValueToNumber("num")
    protected number: number = 1;

    @BindValueToNumber("priced")
    protected price: number = 19.5;

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
        this.price += 19.5;
        this.numstore += 19.5;
        this.plus.next();
    }

    @Click("dec")
    decrement() {
        if (this.number > 1) {
            this.number--;
            this.price -= 19.5;
            this.numstore -= 19.5;
            this.dec.next();
        } else {
            return;
        }
    }
}
