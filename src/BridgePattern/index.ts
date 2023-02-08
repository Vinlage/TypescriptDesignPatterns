import { CellphoneEmissionControl } from "./Controls/CellphoneEmissionControl";
import type { IEmission } from "./interface/IEmission";
import { DesktopEmissionControl } from "./Controls/DesktopEmissionControl";
import { AppEmission } from "./Devices/AppEmission";
import { WebEmission } from "./Devices/WebEmission";

export function createAppEmission() {
    return new AppEmission();
}

export function createWebEmission() {
    return new WebEmission();
}

export function createCellphoneControl(emission: IEmission) {
    return new CellphoneEmissionControl(emission);
}

export function createDesktopControl(emission: IEmission) {
    return new DesktopEmissionControl(emission);
}