import type { ICommand } from "../interface/ICommand";
import type { LightController } from "../Controllers/LightController";

export class LightOnCommand implements ICommand {
    light: LightController;
    constructor(light: LightController) {
        this.light = light;
    }

    public execute(): void {
        this.light.on();
    }

    public undo(): void {
        this.light.off();
    }
}