import type { ICheckService } from "../interface/ICheckService";

export class GolCheckService implements ICheckService {
    checkServiceOn() {
        console.log("Ligar serviço de checagem gol");
    }

    checkServiceOff() {
        console.log("Desligar serviço de checagem gol");
    }
}