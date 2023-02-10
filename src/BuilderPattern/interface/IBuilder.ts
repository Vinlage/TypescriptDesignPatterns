export interface IBuilder {
    airplaneSize(size: number): void;
    addWheels(wheels: number): void;
    addSeats(seats: number): void;
    setColor(color: string): void;
}