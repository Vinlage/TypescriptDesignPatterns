import { LightController } from "./Controllers/LightController";
import { LightOnCommand } from "./Commands/LightOnCommand";
import { LightOffCommand } from "./Commands/LightOffCommand";
import { Alexa } from "./Alexa";
import { TVController } from "./Controllers/TVController";
import { TVOnCommand } from "./Commands/TVOnCommand";
import { TVOffCommand } from "./Commands/TVOffCommand";
import { StereoController } from "./Controllers/StereoController";
import { StereoOnCommand } from "./Commands/StereoOnCommand";
import { StereoOffCommand } from "./Commands/StereoOffCommand";
import type { ICommand } from "./interface/ICommand";
import { MacroCommand } from "./Commands/MacroCommand";

export function createLightController() {
    return new LightController();
}

export function createLightOnCommand(light: LightController) {
    return new LightOnCommand(light);
}

export function createLightOffCommand(light: LightController) {
    return new LightOffCommand(light);
}

export function createTVController() {
    return new TVController();
}

export function createTVOnCommand(tv: TVController) {
    return new TVOnCommand(tv);
}

export function createTVOffCommand(tv: TVController) {
    return new TVOffCommand(tv);
}

export function createStereoController() {
    return new StereoController();
}

export function createStereoOnCommand(stereo: StereoController) {
    return new StereoOnCommand(stereo);
}

export function createStereoOffCommand(stereo: StereoController) {
    return new StereoOffCommand(stereo);
}

export function createMacroCommand(commands: ICommand[]) {
    return new MacroCommand(commands);
}

export function createAlexa() {
    return new Alexa();
}

export function initAlexa(alexa: Alexa) {
    let lightController = new LightController();
    let lightOnCommand = new LightOnCommand(lightController);
    let lightOffCommand = new LightOffCommand(lightController);

    let tvController = new TVController();
    let tvOnCommand = new TVOnCommand(tvController);
    let tvOffCommand = new TVOffCommand(tvController);

    let stereoController = new StereoController();
    let stereoOnCommand = new StereoOnCommand(stereoController);
    let stereoOffCommand = new StereoOffCommand(stereoController);

    let macroOnCommand = new MacroCommand([tvOnCommand, lightOnCommand, stereoOnCommand]);
    let macroOffCommand = new MacroCommand([tvOffCommand, lightOffCommand, stereoOffCommand]);

    alexa.setCommand(0, lightOnCommand, lightOffCommand);
    alexa.setCommand(1, tvOnCommand, tvOffCommand);
    alexa.setCommand(2, stereoOnCommand, stereoOffCommand);
    alexa.setCommand(3, macroOnCommand, macroOffCommand);
}