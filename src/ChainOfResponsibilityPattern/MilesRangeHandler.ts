import { BaseApproveOffer } from "./BaseApproveOffer";
import type { Offer } from "./Offer";

export class MilesRangeHandler extends BaseApproveOffer {
    handle(offer: Offer[]): Offer[] {
        console.log("filtrando milhas que estão no range");
        offer = offer.filter(e => e.miles > 20000 && e.miles < 30000);
        console.log(offer);
        return super.handle(offer);
    }
}