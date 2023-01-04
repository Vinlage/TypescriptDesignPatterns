import type { IIssueService } from "../interface/IIssueService";

export class GolIssueService implements IIssueService {
    issueServiceOn() {
        console.log("Ligar serviço de emissão gol");
    }

    issueServiceOff() {
        console.log("Desligar serviço de emissão gol");
    }
}