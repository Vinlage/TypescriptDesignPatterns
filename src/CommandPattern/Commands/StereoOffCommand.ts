import type { ICommand } from "../interface/ICommand";
import type { StereoController } from "../Controllers/StereoController";

export class StereoOffCommand implements ICommand {
    stereo: StereoController;
    constructor(stereo: StereoController) {
        this.stereo = stereo;
    }

    public execute(): void {
        this.stereo.off();
    }

    public undo(): void {
        this.stereo.on();
    }
}