export class Offer {
    miles: number;
    cpf: boolean;
    diamond: boolean;

    constructor(miles: number, cpf: boolean, diamond: boolean) {
        this.miles = miles;
        this.cpf = cpf;
        this.diamond = diamond;
    }
}