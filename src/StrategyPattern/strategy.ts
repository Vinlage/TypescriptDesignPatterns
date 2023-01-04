import type { IAutomaticIssue } from './interface/IAutomaticIssue';

export class AzulStrategy implements IAutomaticIssue {
    private name: string = 'Azul';
    public getAirlineName(): string {
        return this.name;
    }
    public login(): void {
        console.log(`Realizando login na ${this.name}`);
        console.log(`Login realizado na ${this.name} com sucesso!`);
    }
    public searchFlight(): void {
        console.log(`Buscando voo na ${this.name}`);
        console.log(`Voo buscado na ${this.name} com sucesso!`);
    }
}

export class GolStrategy implements IAutomaticIssue {
    private name: string = 'Gol';
    public getAirlineName(): string {
        return this.name;
    }
    public login(): void {
        console.log(`Realizando login na ${this.name}`);
        console.log(`Login realizado na ${this.name} com sucesso!`);
    }
    public searchFlight(): void {
        console.log(`Buscando voo na ${this.name}`);
        console.log(`Voo buscado na ${this.name} com sucesso!`);
    }
}

export class LatamStrategy implements IAutomaticIssue {
    private name: string = 'Latam';
    public getAirlineName(): string {
        return this.name;
    }
    public login(): void {
        console.log(`Realizando login na ${this.name}`);
        console.log(`Login realizado na ${this.name} com sucesso!`);
    }
    public searchFlight(): void {
        console.log(`Buscando voo na ${this.name}`);
        console.log(`Voo buscado na ${this.name} com sucesso!`);
    }
}
