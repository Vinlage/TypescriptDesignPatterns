import type { IAzulIssueNew } from "src/AdapterPattern/interface/IAzulIssueNew";

export class AzulNew implements IAzulIssueNew {
    azulNewLogin() {
        console.log("Login azul novo site");
    }

    azulNewSelectFlight() {
        console.log("Seleciona voo azul novo site");
    }
}