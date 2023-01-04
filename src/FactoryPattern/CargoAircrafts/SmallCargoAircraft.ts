import { Aircraft } from "../Aircraft";

export class SmallCargoAircraft extends Aircraft {
    constructPlane() {
        console.log(`Construindo ${this.planeName}`);
        this.planeName = 'smallCargoAircraft';
        this.engine = '1.0';
        this.color = 'white';
        this.material = 'titanium';
        console.log(`Avião ${this.planeName} construído`);
    }
}