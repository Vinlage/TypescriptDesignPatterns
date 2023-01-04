import { Aircraft } from "../Aircraft";

export class MediumPassengerAircraft extends Aircraft {
    constructPlane() {
        console.log(`Construindo ${this.planeName}`);
        this.planeName = 'mediumPassengerAircraft';
        this.engine = '2.0';
        this.color = 'white';
        this.material = 'titanium';
        console.log(`Avião ${this.planeName} construído`);
    }
}