import { BindValueToNumber, Click, EzComponent } from "@gsilber/webez";
import html from "./display.component.html";
import css from "./display.component.css";
import { ProductComponent } from "../product/product.component";
import { ShopListComponent } from "../shop-list/shop-list.component";
import { Product2Component } from "../product2/product2.component";
import { Product3Component } from "../product3/product3.component";

export class DisplayComponent extends EzComponent {
    protected prod: ProductComponent = new ProductComponent();
    protected shopp: ShopListComponent = new ShopListComponent();
    protected prod2: Product2Component = new Product2Component();
    protected prod3: Product3Component = new Product3Component();

    @BindValueToNumber("num1")
    protected num1: number = 0;

    @BindValueToNumber("num2")
    protected num2: number = 0;

    @BindValueToNumber("num3")
    protected num3: number = 0;

    @BindValueToNumber("num4")
    protected num4: number = 0;

    @BindValueToNumber("count")
    protected num: number = 0;

    private prodAdded: boolean = false;
    private prod2Added: boolean = false;
    private prod3Added: boolean = false;

    constructor() {
        super(html, css);
        this.addComponent(this.prod, "product");

        this.shopp.clickEvent.subscribe(() => {
            if (!this.prodAdded) {
                // Ensure prod is only added once
                this.addComponent(this.prod, "product");
                this.prodAdded = true;
                this.num++;
                this.num3 += 3;
                this.updateNum1AndNum2(13.5);
                this.prod.plus.subscribe(() => {
                    if (this.prodAdded) {
                        this.updateNum1AndNum2(13.5);
                    }
                });
                this.prod.dec.subscribe(() => {
                    if (this.prodAdded) {
                        this.updateNum1AndNum2(-13.5);
                    }
                });
            }
        });

        this.prod.removeEvent.subscribe(() => {
            if (this.prodAdded) {
                this.removeComponent(this.prod);
                this.prodAdded = false;
                this.num--;
                this.num3 -= 3;
                this.prod.total.subscribe((id: number) => {
                    this.updateRemove(id);
                });
            }
        });

        this.shopp.clickEvent2.subscribe(() => {
            if (!this.prod2Added) {
                // Ensure prod2 is only added once
                this.addComponent(this.prod2, "product");
                this.prod2Added = true;
                this.num++;
                this.num3 += 1;
                this.updateNum1AndNum2(19.5);
                this.prod2.plus.subscribe(() => {
                    if (this.prod2Added) {
                        this.updateNum1AndNum2(19.5);
                    }
                });
                this.prod2.dec.subscribe(() => {
                    if (this.prod2Added) {
                        this.updateNum1AndNum2(-19.5);
                    }
                });
            }
        });

        this.prod2.removeEvent.subscribe(() => {
            if (this.prod2Added) {
                this.removeComponent(this.prod2);
                this.prod2Added = false;
                this.num--;
                this.num3 -= 1;
                this.prod2.total.subscribe((id: number) => {
                    this.updateRemove(id);
                });
            }
        });

        this.shopp.clickEvent3.subscribe(() => {
            if (!this.prod3Added) {
                // Ensure prod3 is only added once
                this.addComponent(this.prod3, "product");
                this.prod3Added = true;
                this.num++;
                this.num3 += 2;
                this.updateNum1AndNum2(24.5);
                this.prod3.plus.subscribe(() => {
                    if (this.prod3Added) {
                        this.updateNum1AndNum2(24.5);
                    }
                });
                this.prod3.dec.subscribe(() => {
                    if (this.prod3Added) {
                        this.updateNum1AndNum2(-24.5);
                    }
                });
            }
        });

        this.prod3.removeEvent.subscribe(() => {
            if (this.prod3Added) {
                this.removeComponent(this.prod3);
                this.prod3Added = false;
                this.num--;
                this.num3 -= 2;
                this.prod3.total.subscribe((id: number) => {
                    this.updateRemove(id);
                });
            }
        });
    }

    private updateNum3(amount: number) {
        this.num3 += amount;
        this.updateNum4(); // Update num4 after changing num3
    }

    @Click("pay-now2")
    shop() {
        this.addComponent(this.shopp, "Shop");
    }

    private updateNum1AndNum2(amount: number) {
        this.num1 += amount;
        if (this.num1 < 0) this.num1 = 0; // Prevent num1 from going negative
        this.num2 = parseFloat(((7 / 100) * this.num1).toFixed(2)); // Ensure num2 is rounded to 2 decimal places
        this.updateNum4(); // Update num4 after changing num1 and num2
    }

    private updateRemove(amount: number) {
        if (this.num1 >= amount) {
            this.num1 -= amount;
        } else {
            this.num1 = 0; // Prevent num1 from going negative
        }
        this.num2 = parseFloat(((7 / 100) * this.num1).toFixed(2)); // Recalculate num2 based on the new value of num1
        this.updateNum4(); // Update num4 after changing num1 and num2
    }

    private updateNum4() {
        this.num4 = this.num1 + this.num2 + this.num3;
    }
}
