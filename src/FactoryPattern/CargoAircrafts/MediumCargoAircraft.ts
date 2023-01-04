import { Aircraft } from "../Aircraft";

export class MediumCargoAircraft extends Aircraft {
    constructPlane() {
        console.log(`Construindo ${this.planeName}`);
        this.planeName = 'mediumCargoAircraft';
        this.engine = '1.0';
        this.color = 'white';
        this.material = 'titanium';
        console.log(`Avião ${this.planeName} construído`);
    }
}