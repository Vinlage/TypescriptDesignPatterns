import type { IBuilder } from "./interface/IBuilder";

export class Director {
    builder: IBuilder;

    constructor(builder: IBuilder) {
        this.builder = builder;
    }

    buildComercialPlane() {
        this.builder.airplaneSize(10);
        this.builder.addWheels(4);
        this.builder.addSeats(40);
        this.builder.setColor("blue");
    }

    buildCargoPlane() {
        this.builder.airplaneSize(20);
        this.builder.addWheels(10);
        this.builder.setColor("white");
    }
}