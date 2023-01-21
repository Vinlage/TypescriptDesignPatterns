import type { MaxCompany } from "./Companies/MaxCompany";
import type { UDTCompany } from "./Companies/UDTCompany";
import type { IIterator } from "./interface/IIterator";

export class SearchFlights {
    max: MaxCompany;
    UDT: UDTCompany;

    constructor(max: MaxCompany, UDT: UDTCompany) {
        this.max = max;
        this.UDT = UDT;
    }

    listMiles() {
        let maxIterator = this.max.createIterator();
        this.list(maxIterator);
    }

    listOTA() {
        let UDTIterator = this.UDT.createIterator();
        this.list(UDTIterator);
    }

    listAll() {
        let maxIterator = this.max.createIterator();
        let UDTIterator = this.UDT.createIterator();
        this.list(maxIterator);
        this.list(UDTIterator);
    }

    list(iterator: IIterator) {
        console.log(iterator);
        while (iterator.hasNext()) {
            let flight = iterator.next();
            console.log(flight);
        }
    }
}