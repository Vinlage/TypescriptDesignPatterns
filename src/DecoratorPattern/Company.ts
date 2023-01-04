export abstract class Company {
    airline: string = 'none';
    luggageQtd: number = 0;

    getAirline(): string {
        return this.airline;
    }

    abstract flightCost(): number;
}