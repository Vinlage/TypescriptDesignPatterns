import type { TransactionFlyweight } from "./interface/TransactionFlyweight";
import type { TransactionData } from "./TransactionTypes";

export class Transaction implements TransactionFlyweight {
    constructor(private readonly intrinsicState: TransactionData) {}

    informTransaction(number: number, value: number): void {
        console.log(`Numero da transação: ${number}`);
        console.log(`Valor da transação: ${value}`);
        console.log(`Airline: ${this.intrinsicState.airline}`);
        console.log(`Tipo: ${this.intrinsicState.type}\n`);
    }
}