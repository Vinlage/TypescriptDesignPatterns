import { Composite } from "../Composite";
import type { IComponent } from "../interface/IComponent";

export class Azul extends Composite {
    operation() {
        console.log('Azul ativada!');
        super.operation();
    }

    add(component: IComponent) {
        super.add(component);
        return this;
    }
}