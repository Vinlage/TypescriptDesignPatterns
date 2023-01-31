export type IFlight = { 
    code: number,
    airport: string
};

export interface IFlightSystem {
    getFlightList(): Promise<IFlight[]>;
}