import { PassengerAircraftShop, aircraftType as passengerAircraftType } from "./PassengerAircraftShop";
import { CargoAircraftShop, aircraftType as cargoAircraftType } from "./CargoAircraftShop";
import type { Aircraft } from "./Aircraft";

export function createPassengerPlane(type: passengerAircraftType): Aircraft | null {
    let passengerAircraftShop: PassengerAircraftShop = new PassengerAircraftShop();
    return passengerAircraftShop.orderAircraft(type);
}

export function createCargoPlane(type: cargoAircraftType): Aircraft | null {
    let cargoAircraftShop: CargoAircraftShop = new CargoAircraftShop();
    return cargoAircraftShop.orderAircraft(type);
}