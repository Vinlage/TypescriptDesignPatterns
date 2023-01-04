import type { IOfferService } from "../interface/IOfferService";

export class LatamOfferService implements IOfferService {
    offerServiceOn() {
        console.log("Ligar serviço de ofertas latam");
    }

    offerServiceOff() {
        console.log("Desligar serviço de ofertas latam");
    }
}