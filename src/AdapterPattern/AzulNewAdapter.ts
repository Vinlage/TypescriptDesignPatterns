import type { IAzulIssue } from "./interface/IAzulIssue";
import type { IAzulIssueNew } from "./interface/IAzulIssueNew";

export class AzulNewAdapter implements IAzulIssue {
    azulNew: IAzulIssueNew;

    constructor(azulNew: IAzulIssueNew) {
        this.azulNew = azulNew;
    }

    azulLogin() {
        this.azulNew.azulNewLogin();
    }

    azulSelectFlight() {
        this.azulNew.azulNewSelectFlight();
    }
}