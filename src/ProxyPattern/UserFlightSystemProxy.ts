import type { IFlightSystem, IFlight } from "./interface/IFlightSystem";
import { FlightCia } from "./FlightCia";

export class UserFlightSystemProxy implements IFlightSystem {
    private realCia: IFlightSystem | null = null;
    private realCiaFlightList: IFlight[] | null = null;

    private createCia() {
        if (this.realCia === null) {
            this.realCia = new FlightCia('Smiles');
        }

        return this.realCia;
    }

    async getFlightList(): Promise<IFlight[]> {
        this.realCia = this.createCia();

        if (this.realCiaFlightList === null) {
            console.log('waiting to get flightList');
            this.realCiaFlightList = await this.realCia.getFlightList();
        }
        
        return this.realCiaFlightList;
    }
}