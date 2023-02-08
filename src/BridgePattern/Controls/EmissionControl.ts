import type { IEmission } from "../interface/IEmission";

export class EmissionControl {
    protected emission: IEmission;

    constructor(emission: IEmission) {
        this.emission = emission;
    }

    startEmission() {
        this.emission.startEmission();
    }
}