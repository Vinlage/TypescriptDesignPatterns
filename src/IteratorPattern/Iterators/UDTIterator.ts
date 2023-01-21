import type { IIterator } from "../interface/IIterator";

export class UDTIterator implements IIterator {
    flights: Object = {};
    position: number = 0;

    constructor(flights: Object) {
        this.flights = flights;
    }

    hasNext(): boolean {
        return this.position < Object.keys(this.flights).length;
    }

    next(): string {
        let flight: string = Object.values(this.flights).at(this.position);
        this.position++;
        return flight;
    }
}