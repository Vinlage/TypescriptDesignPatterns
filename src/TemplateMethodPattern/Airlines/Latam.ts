import { AutomaticIssue } from "../AutomaticIssue";
import type { IStrategy } from "../interface/IStrategy";

export class Latam extends AutomaticIssue {
    strategy: IStrategy = {
        login() {
            console.log("Login Latam");
        },
        selectFlights() {
            console.log("Select flight Latam");
        },
        registerPassenger() {
            console.log("Register passenger Latam");
        },
        payment() {
            console.log("Payment Latam");
        },
        extractEticket() {
            console.log("Extract eticket Latam");
        }
    };
}