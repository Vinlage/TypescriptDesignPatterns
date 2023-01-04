import { AutomaticIssue } from "../AutomaticIssue";
import type { IStrategy } from "../interface/IStrategy";

export class Azul extends AutomaticIssue {
    strategy: IStrategy = {
        login() {
            console.log("Login Azul");
        },
        selectFlights() {
            console.log("Select flight Azul");
        },
        registerPassenger() {
            console.log("Register passenger Azul");
        },
        payment() {
            console.log("Payment Azul");
        },
        extractEticket() {
            console.log("Extract eticket Azul");
        }
    };
}