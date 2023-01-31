import type { IFlightSystem, IFlight } from "./interface/IFlightSystem";

export class FlightCia implements IFlightSystem {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    async getFlightList(): Promise<IFlight[]> {
        return new Promise((resolve) => {
            return setTimeout(() => {
                return resolve([
                    { code: 1, airport: 'CGH' },
                    { code: 2, airport: 'SDU' },
                    { code: 3, airport: 'CNF' }
                ]);
            }, 5000);
        });
    }
}