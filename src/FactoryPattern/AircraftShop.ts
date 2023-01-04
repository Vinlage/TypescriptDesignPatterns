import type { Aircraft } from "./Aircraft";

export abstract class AircraftShop {
    orderAircraft(type: string): Aircraft | null {
        let aircraft: Aircraft | null;

        aircraft = this.createPlane(type);
        aircraft?.constructPlane();

        return aircraft;
    }

    abstract createPlane(type: string): Aircraft | null;
}