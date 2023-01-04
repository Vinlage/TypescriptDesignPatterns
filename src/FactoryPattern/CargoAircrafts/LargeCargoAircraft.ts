import { Aircraft } from "../Aircraft";

export class LargeCargoAircraft extends Aircraft {
    constructPlane() {
        console.log(`Construindo ${this.planeName}`);
        this.planeName = 'largeCargoAircraft';
        this.engine = '1.0';
        this.color = 'white';
        this.material = 'titanium';
        console.log(`Avião ${this.planeName} construído`);
    }
}