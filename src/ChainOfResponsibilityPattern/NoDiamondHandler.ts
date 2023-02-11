import { BaseApproveOffer } from "./BaseApproveOffer";
import type { Offer } from "./Offer";

export class NoDiamondHandler extends BaseApproveOffer {
    handle(offer: Offer[]): Offer[] {
        console.log("filtrando ofertantes que não são diamante");
        offer = offer.filter(e => !e.diamond);
        return super.handle(offer);
    }
}