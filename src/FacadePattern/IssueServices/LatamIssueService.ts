import type { IIssueService } from "../interface/IIssueService";

export class LatamIssueService implements IIssueService {
    issueServiceOn() {
        console.log("Ligar serviço de emissão latam");
    }

    issueServiceOff() {
        console.log("Desligar serviço de emissão latam");
    }
}