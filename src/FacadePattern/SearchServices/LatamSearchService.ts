import type { ISearchService } from "../interface/ISearchService";

export class LatamSearchService implements ISearchService {
    searchServiceOn() {
        console.log("Ligar serviço de busca latam");
    }

    searchServiceOff() {
        console.log("Desligar serviço de busca latam");
    }
}