import type { Mediator } from "./Mediator";

export class Buyer {
    mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    buy(price: number) {
        this.mediator.buyTicket(price);
    }
}