import { EmissionControl } from "./EmissionControl";

export class CellphoneEmissionControl extends EmissionControl {
    startEmission() {
        const result = this.emission.startEmission();
        console.log("GUI do celular: " + result);
    }
}