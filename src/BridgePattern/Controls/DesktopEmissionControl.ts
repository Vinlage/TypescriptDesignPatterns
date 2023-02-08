import { EmissionControl } from "./EmissionControl";

export class DesktopEmissionControl extends EmissionControl {
    startEmission() {
        const result = this.emission.startEmission();
        console.log("GUI do desktop: " + result);
    }
}