import { AirplaneBuilder } from "./AirplaneBuilder";
import { Airplane } from "./Airplane";
import { Director } from "./Director";
import type { IBuilder } from "./interface/IBuilder";

export function createAirplane(): Airplane {
    return new Airplane();
}

export function createAirplaneBuilder(airplane: Airplane): IBuilder {
    return new AirplaneBuilder(airplane);
}

export function createDirector(builder: IBuilder) {
    return new Director(builder);
}