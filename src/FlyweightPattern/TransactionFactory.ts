import { Transaction } from "./Transaction";
import type { TransactionDictionary, TransactionData } from "./TransactionTypes";
import type { TransactionFlyweight } from "./interface/TransactionFlyweight";

export class TransactionFactory {
    private transactionData: TransactionDictionary = {}

    private getKey(data: TransactionData): string {
        return Object.values(data).join('_');
    }

    createTransaction(intrisicState: TransactionData): TransactionFlyweight {
        const key = this.getKey(intrisicState);

        if(!(key in this.transactionData)) {
            this.transactionData[key] = new Transaction(intrisicState);
        }
        return this.transactionData[key];
    }
}