import type { IOfferService } from "../interface/IOfferService";

export class GolOfferService implements IOfferService {
    offerServiceOn() {
        console.log("Ligar serviço de ofertas gol");
    }

    offerServiceOff() {
        console.log("Desligar serviço de ofertas gol");
    }
}