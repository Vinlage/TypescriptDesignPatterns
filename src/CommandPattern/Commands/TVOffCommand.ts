import type { ICommand } from "../interface/ICommand";
import type { TVController } from "../Controllers/TVController";

export class TVOffCommand implements ICommand {
    tv: TVController;
    constructor(tv: TVController) {
        this.tv = tv;
    }

    public execute(): void {
        this.tv.off();
    }

    public undo(): void {
        this.tv.on();
    }
}