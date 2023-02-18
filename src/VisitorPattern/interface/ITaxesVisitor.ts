import type { Azul } from "../Azul";
import type { Gol } from "../Gol";

export interface ITaxesVisitor {
    calculateTaxesAzul(element: Azul): number;
    calculateTaxesGol(element: Gol): number;
}