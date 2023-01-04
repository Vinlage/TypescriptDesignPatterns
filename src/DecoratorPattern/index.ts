import { Azul } from "./Companies/Azul";
import { Smiles } from "./Companies/Smiles";
import { Latam } from "./Companies/Latam";
import type { Company } from "./Company";
import { Luggage } from "./Decorators/Luggage";
import { SpecialServices } from "./Decorators/SpecialServices";

export function createAzulFlight() {
    return new Azul();
} 

export function createSmilesFlight() {
    return new Smiles();
} 

export function createLatamFlight() {
    return new Latam();
} 

export function addLuggage(company: Company) {
    return new Luggage(company);
}

export function addSpecialServices(company: Company) {
    return new SpecialServices(company);
}