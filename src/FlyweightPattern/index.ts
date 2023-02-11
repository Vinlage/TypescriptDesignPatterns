import { TransactionFactory } from "./TransactionFactory";
import { transactionContext } from "./TransactionContext";

export function createTransactionFactory() {
    return new TransactionFactory();
}

export function createTransaction(factory: TransactionFactory, number: number, value: number, airline: string, type: string) {
    return transactionContext(factory, number, value, airline, type);
}

export function generateTransactions(factory: TransactionFactory) {
    transactionContext(factory, 100, 1000, 'GOL', 'MILES');
    transactionContext(factory, 101, 2000, 'GOL', 'OTA');
    transactionContext(factory, 102, 3000, 'GOL', 'MILES');
    transactionContext(factory, 103, 4000, 'AZUL', 'MILES');
    transactionContext(factory, 104, 5000, 'AZUL', 'OTA');
}