import type { IAzulIssue } from "src/AdapterPattern/interface/IAzulIssue";

export class Azul implements IAzulIssue {
    azulLogin() {
        console.log("Login azul");
    }

    azulSelectFlight() {
        console.log("Seleciona voo azul");
    }
}