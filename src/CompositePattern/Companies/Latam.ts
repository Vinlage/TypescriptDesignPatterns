import { Composite } from "../Composite";
import type { IComponent } from "../interface/IComponent";

export class Latam extends Composite {
    operation() {
        console.log('Latam ativada!');
        super.operation();
    }

    add(component: IComponent) {
        super.add(component);
        return this;
    }
}