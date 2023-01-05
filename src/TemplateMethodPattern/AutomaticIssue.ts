import type { IStrategy } from "./interface/IStrategy";

export abstract class AutomaticIssue {
    abstract strategy: IStrategy;

    private on() {
        console.log("Ligando emissão");
    }

    private off() {
        console.log("Desligando emissão");
    }
}