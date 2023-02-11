import { Offer } from "./Offer";
import { OfferFraudHandler } from "./OfferFraudHandler";
import { MilesRangeHandler } from "./MilesRangeHandler";
import { NoDiamondHandler } from "./NoDiamondHandler";

export function createOffer(miles: number, cpf: boolean, diamond: boolean): Offer {
    return new Offer(miles, cpf, diamond);
}

export function createOfferApproval(offer: Offer[]) {
    const offerFraudHandler = new OfferFraudHandler();
    offerFraudHandler
        .setNextHandler(new MilesRangeHandler())
        .setNextHandler(new NoDiamondHandler());
    
    return offerFraudHandler.handle(offer);
}