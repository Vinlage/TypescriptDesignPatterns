import type { TransactionFactory } from "./TransactionFactory";

export const transactionContext = function(
    factory: TransactionFactory,
    number: number,
    value: number,
    airline: string,
    type: string,
): void {
    const transaction = factory.createTransaction({ airline, type })
    transaction.informTransaction(number, value);
}