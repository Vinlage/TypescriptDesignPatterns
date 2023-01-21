import type { IIterator } from "./IIterator";

export interface ICompany {
    createIterator(): IIterator;
    addFlight(flight: string): void;
}