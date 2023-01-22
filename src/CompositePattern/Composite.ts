import type { IComponent } from "./interface/IComponent";

export abstract class Composite implements IComponent {
    protected childs: IComponent[] = [];

    operation() {
        this.childs.forEach(child => {
            child.operation();
        });
    }

    add(component: IComponent) {
        this.childs.push(component);
    }

    remove(component: IComponent) {
        this.childs.splice(this.childs.indexOf(component), 1);
    }

    getChild() {
        return this.childs;
    }
}