import { Company } from "../Company";

export class Latam extends Company {
    constructor() {
        super();
        this.airline = 'Latam';
    }

    flightCost() {
        return 150;
    }
}