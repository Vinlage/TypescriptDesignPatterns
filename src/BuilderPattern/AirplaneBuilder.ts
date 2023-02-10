import type { IBuilder } from "./interface/IBuilder";
import type { Airplane } from "./Airplane";

export class AirplaneBuilder implements IBuilder {
    airplane: Airplane;

    constructor(airplane: Airplane) {
        this.airplane = airplane;
    }

    airplaneSize(size: number): void {
        this.airplane.parts['size'] = size;
    }

    addWheels(wheels: number): void {
        this.airplane.parts['wheels'] = wheels;
    }

    addSeats(seats: number): void {
        this.airplane.parts['seats'] = seats;
    }

    setColor(color: string): void {
        this.airplane.parts['color'] = color;
    }
}