import type { ICommand } from "../interface/ICommand";
import type { StereoController } from "../Controllers/StereoController";

export class StereoOnCommand implements ICommand {
    stereo: StereoController;
    constructor(stereo: StereoController) {
        this.stereo = stereo;
    }

    public execute(): void {
        this.stereo.on();
    }

    public undo(): void {
        this.stereo.off();
    }
}