import type { ICheckService } from "../interface/ICheckService";

export class AzulCheckService implements ICheckService {
    checkServiceOn() {
        console.log("Ligar serviço de checagem azul");
    }

    checkServiceOff() {
        console.log("Desligar serviço de checagem azul");
    }
}