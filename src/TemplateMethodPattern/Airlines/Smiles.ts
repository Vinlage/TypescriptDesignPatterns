import { AutomaticIssue } from "../AutomaticIssue";
import type { IStrategy } from "../interface/IStrategy";

export class Smiles extends AutomaticIssue {
    strategy: IStrategy = {
        login() {
            console.log("Login Smiles");
        },
        selectFlights() {
            console.log("Select flight Smiles");
        },
        registerPassenger() {
            console.log("Register passenger Smiles");
        },
        payment() {
            console.log("Payment Smiles");
        },
        extractEticket() {
            console.log("Extract eticket Smiles");
        }
    };
}