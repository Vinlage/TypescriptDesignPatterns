import type { IPrototype } from "./interface/IPrototype";

export class PlanesPrototype implements IPrototype {
    private color?: string;
    private engine?: string;
    
    clone(): this {
        const clone = Object.create(this);
        return clone;
    }

    getColor(): string | undefined {
        return this.color;
    }

    setColor(color: string) {
        this.color = color;
    }

    getEngine(): string | undefined {
        return this.engine;
    }

    setEngine(engine: string) {
        this.engine = engine;
    }
}