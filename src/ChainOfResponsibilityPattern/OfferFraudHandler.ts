import { BaseApproveOffer } from "./BaseApproveOffer";
import type { Offer } from "./Offer";

export class OfferFraudHandler extends BaseApproveOffer {
    handle(offer: Offer[]): Offer[] {
        console.log("filtrando cpfs certos");
        offer = offer.filter(e => e.cpf);
        console.log(offer);
        return super.handle(offer);
    }
}