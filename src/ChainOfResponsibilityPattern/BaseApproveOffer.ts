import type { Offer } from "./Offer";

export abstract class BaseApproveOffer {
    protected nextHandler: BaseApproveOffer | null = null;

    setNextHandler(handler: BaseApproveOffer): BaseApproveOffer {
        this.nextHandler = handler;
        return handler; 
    }

    handle(offer: Offer[]): Offer[] {
        if (this.nextHandler) return this.nextHandler.handle(offer);
        return offer;
    }
}