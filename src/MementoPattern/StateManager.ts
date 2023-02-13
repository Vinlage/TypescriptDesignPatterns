import type { GameState } from "./GameState";
import type { IMemento } from "./interface/IMemento";

export class StateManager {
    private mementos: IMemento[] = [];

    private gameState: GameState;

    constructor(gameState: GameState) {
        this.gameState = gameState;
    }

    public saveGame(): void {
        console.log('Salvando o estado original');
        this.mementos.push(this.gameState.save());
    }

    public restoreGame(slot: number): void {
        if (!this.mementos[slot]) {
            console.log("Não existe save nesse slot!")
            return;
        }
        const memento = this.mementos[slot];

        console.log(`Restaurando o estado para: ${memento.getName()}`);
        this.gameState.restore(memento);
    }

    public showHistory(): void {
        console.log('Lista de mementos:');
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}