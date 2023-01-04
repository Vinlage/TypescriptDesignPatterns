import { AircraftShop } from "./AircraftShop";
import type { Aircraft } from "./Aircraft";
import { SmallCargoAircraft } from "./CargoAircrafts/SmallCargoAircraft";
import { MediumCargoAircraft } from "./CargoAircrafts/MediumCargoAircraft";
import { LargeCargoAircraft } from "./CargoAircrafts/LargeCargoAircraft";

export enum aircraftType {
    Small = "Small",
    Medium = "Medium",
    Large = "Large"
}

export class CargoAircraftShop extends AircraftShop {
    createPlane(type: aircraftType): Aircraft | null {
        if (type === aircraftType.Small) return new SmallCargoAircraft();
        if (type == aircraftType.Medium) return new MediumCargoAircraft();
        if (type == aircraftType.Large) return new LargeCargoAircraft();
        
        console.log("Não existe esse tipo de avião!");
        console.log("Selecione dentre os tipos: ");
        for (const types in aircraftType) {
            console.log(types);
        }
        return null;
    }
}