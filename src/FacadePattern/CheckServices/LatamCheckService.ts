import type { ICheckService } from "../interface/ICheckService";

export class LatamCheckService implements ICheckService {
    checkServiceOn() {
        console.log("Ligar serviço de checagem latam");
    }

    checkServiceOff() {
        console.log("Desligar serviço de checagem latam");
    }
}