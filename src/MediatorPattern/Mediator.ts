import type { Offerer } from "./Offerer";

export class Mediator {
    offerers: Offerer[] = [];

    addOfferers(...offerers: Offerer[]): void {
        offerers.forEach(offerer => {
            this.offerers.push(offerer);
            offerer.setMediator(this);
        });
    }

    buyTicket(price: number) {
        const offererSelected = this.offerers.find(offerer => offerer.miles >= price);
        if (!offererSelected) {
            console.log("Nenhum ofertante encontrado nessa faixa de preço");
            return;
        }

        offererSelected.sellMiles(price);
    }
}