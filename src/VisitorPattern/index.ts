import { Azul } from "./Azul";
import { Gol } from "./Gol";
import { LuggageTaxesVisitor } from "./LuggageTaxesVisitor";

export function createAzulTicket(price: number) {
    return new Azul(price);
}

export function createGolTicket(price: number) {
    return new Gol(price);
}

export function createLuggageTaxesVisitor() {
    return new LuggageTaxesVisitor();
}