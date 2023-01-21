import type { IIterator } from "../interface/IIterator";

export class MaxIterator implements IIterator {
    flights: Array<string> = [];
    position: number = 0;

    constructor(flights: Array<string>) {
        this.flights = flights;
    }

    hasNext(): boolean {
        return this.position < this.flights.length;
    }

    next(): string {
        let flight: string = this.flights[this.position];
        this.position++;
        return flight;
    }
}