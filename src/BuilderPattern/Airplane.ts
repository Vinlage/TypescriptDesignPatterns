export class Airplane {
    parts: Record<string, string | number> = {};

    listParts(): void {
        console.log(`Product parts: ${this.parts}\n`);
    }
}