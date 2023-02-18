import type { ITaxesVisitor } from "./interface/ITaxesVisitor";
import type { Azul } from "./Azul";
import type { Gol } from "./Gol";

export class LuggageTaxesVisitor implements ITaxesVisitor {
    calculateTaxesAzul(azul: Azul): number {
        return azul.getPrice() + 50;
    }

    calculateTaxesGol(gol: Gol): number {
        return gol.getPrice() + 60;
    }
}