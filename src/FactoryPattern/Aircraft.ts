export abstract class Aircraft {
    planeName: string = '';
    engine: string = '';
    color: string = '';
    material: string = '';

    abstract constructPlane(): void;
}