import { Company } from "../Company";

export class Azul extends Company {
    private flightPrice: number;

    constructor() {
        super();
        this.airline = 'Azul';
        this.flightPrice = 120;
    }
    
    flightCost() {
        return this.flightPrice;
    }
}