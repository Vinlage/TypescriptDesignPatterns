import { Company } from "../Company";

export class Smiles extends Company {
    constructor() {
        super();
        this.airline = 'Smiles';
    }

    flightCost() {
        return 100;
    }
}