import { Aircraft } from "../Aircraft";

export class LargePassengerAircraft extends Aircraft {
    constructPlane() {
        console.log(`Construindo ${this.planeName}`);
        this.planeName = 'largePassengerAircraft';
        this.engine = '2.0';
        this.color = 'white';
        this.material = 'titanium';
        console.log(`Avião ${this.planeName} construído`);
    }
}