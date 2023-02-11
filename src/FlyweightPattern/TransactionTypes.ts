import type { Transaction } from "./Transaction"

export type TransactionData = {
    readonly airline: string;
    readonly type: string;
}

export type TransactionDictionary = {
    [key: string] : Transaction
}