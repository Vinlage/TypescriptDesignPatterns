import { Composite } from "../Composite";
import type { IComponent } from "../interface/IComponent";

export class Gol extends Composite {
    operation() {
        console.log('Gol ativada!');
        super.operation();
    }

    add(component: IComponent) {
        super.add(component);
        return this;
    }
}