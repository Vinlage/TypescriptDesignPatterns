import type { Company } from "../Company";
import { Additional } from "./Additional";

export class Luggage extends Additional {
    private company: Company;
    private luggagePrice: number;

    constructor(company: Company) {
        super();
        this.company = company;
        this.luggageQtd = company.luggageQtd + 1;
        this.airline = company.airline;
        this.luggagePrice = 90;
        console.log(`Adicionando bagagem: ${this.luggagePrice} reais`);
    }

    flightCost() {
        return this.luggagePrice + this.company.flightCost();
    }
}