import type { IOfferService } from "../interface/IOfferService";

export class AzulOfferService implements IOfferService {
    offerServiceOn() {
        console.log("Ligar serviço de ofertas azul");
    }

    offerServiceOff() {
        console.log("Desligar serviço de ofertas azul");
    }
}