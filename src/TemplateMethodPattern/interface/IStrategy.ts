export interface IStrategy {
    login(): void;
    selectFlights(): void;
    registerPassenger(): void;
    payment(): void;
    extractEticket(): void;
}