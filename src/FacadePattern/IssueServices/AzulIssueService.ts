import type { IIssueService } from "../interface/IIssueService";

export class AzulIssueService implements IIssueService {
    issueServiceOn() {
        console.log("Ligar serviço de emissão azul");
    }

    issueServiceOff() {
        console.log("Desligar serviço de emissão azul");
    }
}