import { Mediator } from "./Mediator";
import { Offerer } from "./Offerer";
import { Buyer } from "./Buyer";

export function createMediator() {
    return new Mediator();
}

export function createOfferer(name: string, miles: number) {
    return new Offerer(name, miles);
}

export function createBuyer(mediator: Mediator) {
    return new Buyer(mediator);
}