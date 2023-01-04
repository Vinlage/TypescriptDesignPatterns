import { Azul } from "./Azul";
import { AzulNew } from "./AzulNew";
import { AzulNewAdapter } from "./AzulNewAdapter";
import type { IAzulIssueNew } from "./interface/IAzulIssueNew";
import type { IAzulIssue } from "./interface/IAzulIssue";

export function createAzul() {
    return new Azul();
}

export function createAzulNew() {
    return new AzulNew();
}

export function createAzulNewAdapter(azulNew: IAzulIssueNew) {
    return new AzulNewAdapter(azulNew);
}

export function executeAzul(azul: IAzulIssue) {
    azul.azulLogin();
    azul.azulSelectFlight();
}