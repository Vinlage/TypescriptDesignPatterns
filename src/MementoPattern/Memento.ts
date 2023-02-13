import type { IMemento } from "./interface/IMemento";
import type { State } from "./State";

export class Memento implements IMemento {
    private state: State;
    private date: string;

    constructor(state: State) {
        this.state = state;
        this.date = new Date().toString();
    }

    getState(): State {
        return this.state;
    }

    getName(): string {
        return `${this.date} / (${this.state.level}-${this.state.life})`;
    }

    getDate(): string {
        return this.date;
    }
}