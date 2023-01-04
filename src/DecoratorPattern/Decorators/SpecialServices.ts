import type { Company } from "../Company";
import { Additional } from "./Additional";

export class SpecialServices extends Additional {
    private company: Company;
    private specialServicesPrice: number;

    constructor(company: Company) {
        super();
        this.company = company;
        this.airline = company.airline;
        this.specialServicesPrice = 20;
        console.log(`Adicionando serviços especiais: ${this.specialServicesPrice} reais`);
    }
    flightCost() {
        return this.specialServicesPrice + this.company.flightCost();
    }
}