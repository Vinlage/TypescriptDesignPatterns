import type { ICommand } from "../interface/ICommand";
import type { TVController } from "../Controllers/TVController";

export class TVOnCommand implements ICommand {
    tv: TVController;
    constructor(tv: TVController) {
        this.tv = tv;
    }

    public execute(): void {
        this.tv.on();
    }

    public undo(): void {
        this.tv.off();
    }
}