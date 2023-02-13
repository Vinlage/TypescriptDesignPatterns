import type { IMemento } from "./interface/IMemento";
import { Memento } from "./Memento";
import type { State } from "./State";

export class GameState {
    private state: State;

    constructor(state: State) {
        this.state = state;
        console.log(`Estado inicial: ${JSON.stringify(state)}`);
    }

    public levelCompleted(): void {
        console.log('Level completado com sucesso!');
        this.state.level += 1;
        console.log(`Estado modificado para: ${JSON.stringify(this.state)}`);
    }

    public setLife(life: number) {
        console.log('Modificando a vida do personagem!');
        this.state.life = life;
        console.log(`Estado modificado para: ${JSON.stringify(this.state)}`);
    }

    public save(): IMemento {
        return new Memento({ ...this.state });
    }

    public restore(memento: IMemento): void {
        this.state = memento.getState();
        console.log(`Estado modificado para: ${JSON.stringify(this.state)}`);
    }
}