import type { Mediator } from "./Mediator";

export class Offerer {
    name: string;
    miles: number;
    mediator?: Mediator;

    constructor(name: string, miles: number) {
        this.name = name;
        this.miles = miles;
    }

    setMediator(mediator: Mediator) {
        this.mediator = mediator;
    }

    getMiles(): number {
        return this.miles;
    }

    sellMiles(miles: number) {
        this.miles -= miles;
        console.log(`${this.name} vendeu suas milhas com sucesso! Milhas restantes: ${this.miles}`)
    }
}