import type { ICompany } from "../interface/ICompany";
import type { IIterator } from "../interface/IIterator";
import { UDTIterator } from "../Iterators/UDTIterator";

export class UDTCompany implements ICompany {
    flights: Object = {};

    createIterator(): IIterator {
        return new UDTIterator(this.flights);
    }

    addFlight(flight: string) {
        let size = Object.keys(this.flights).length;
        Object.assign(this.flights, { [size]: flight });
    }
}