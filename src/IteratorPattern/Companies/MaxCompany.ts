import type { ICompany } from "../interface/ICompany";
import type { IIterator } from "../interface/IIterator";
import { MaxIterator } from "../Iterators/MaxIterator";

export class MaxCompany implements ICompany {
    flights: Array<string> = [];

    createIterator(): IIterator {
        return new MaxIterator(this.flights);
    }

    addFlight(flight: string) {
        this.flights.push(flight);
    }
}