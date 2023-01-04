import { Latam } from "./Airlines/Latam";
import { Azul } from "./Airlines/Azul";
import { Smiles } from "./Airlines/Smiles";

export function createAzulStrategy() {
    return new Azul();
}

export function createLatamStrategy() {
    return new Latam();
}

export function createSmilesStrategy() {
    return new Smiles();
}