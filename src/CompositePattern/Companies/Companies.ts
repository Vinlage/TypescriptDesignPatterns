import { Composite } from "../Composite";
import type { IComponent } from "../interface/IComponent";

export class Companies extends Composite {
    constructor(childs: IComponent[]) {
        super();
        this.childs = childs;
    }
}