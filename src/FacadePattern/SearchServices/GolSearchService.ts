import type { ISearchService } from "../interface/ISearchService";

export class GolSearchService implements ISearchService {
    searchServiceOn() {
        console.log("Ligar serviço de busca gol");
    }

    searchServiceOff() {
        console.log("Desligar serviço de busca gol");
    }
}