import { AircraftShop } from "./AircraftShop";
import { SmallPassengerAircraft } from "./PassengerAircrafts/SmallPassengerAircraft";
import type { Aircraft } from "./Aircraft";
import { MediumPassengerAircraft } from "./PassengerAircrafts/MediumPassengerAircraft";
import { LargePassengerAircraft } from "./PassengerAircrafts/LargePassengerAircraft";
import { LuxuryPassengerAircraft } from "./PassengerAircrafts/LuxuryPassengerAircraft";

export enum aircraftType {
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
    Luxury = "Luxury"
}

export class PassengerAircraftShop extends AircraftShop {
    createPlane(type: aircraftType): Aircraft | null {
        if (type === aircraftType.Small) return new SmallPassengerAircraft();
        if (type == aircraftType.Medium) return new MediumPassengerAircraft();
        if (type == aircraftType.Large) return new LargePassengerAircraft();
        if (type == aircraftType.Luxury) return new LuxuryPassengerAircraft();
        
        console.log("Não existe esse tipo de avião!");
        console.log("Selecione dentre os tipos: ");
        for (const types in aircraftType) {
            console.log(types);
        }
        return null;
    }
}