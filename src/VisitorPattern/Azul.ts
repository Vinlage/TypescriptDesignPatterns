import type { ITicket } from "./interface/ITicket";
import type { LuggageTaxesVisitor } from "./LuggageTaxesVisitor";

export class Azul implements ITicket {
    private price: number;

    constructor(price: number) {
        this.price = price;
    }

    public getPrice(): number {
        return this.price;
    }

    public getPriceWithTaxes(visitor: LuggageTaxesVisitor): number {
        return visitor.calculateTaxesAzul(this);
    }
}