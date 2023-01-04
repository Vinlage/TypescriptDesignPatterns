import type { ICommand } from "../interface/ICommand";
import type { LightController } from "../Controllers/LightController";

export class LightOffCommand implements ICommand {
    light: LightController;
    constructor(light: LightController) {
        this.light = light;
    }

    public execute(): void {
        this.light.off();
    }

    public undo(): void {
        this.light.on();
    }
}