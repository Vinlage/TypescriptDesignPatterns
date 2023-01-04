import { Aircraft } from "../Aircraft";

export class LuxuryPassengerAircraft extends Aircraft {
    constructPlane() {
        console.log(`Construindo ${this.planeName}`);
        this.planeName = 'luxuryPassengerAircraft';
        this.engine = '2.0';
        this.color = 'white';
        this.material = 'diamond';
        console.log(`Avião ${this.planeName} construído`);
    }
}