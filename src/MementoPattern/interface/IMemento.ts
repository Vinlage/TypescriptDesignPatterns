import type { State } from "../State";

export interface IMemento {
    getState(): State;
    getName(): string;
    getDate(): string;
}