import type { ISearchService } from "../interface/ISearchService";

export class AzulSearchService implements ISearchService {
    searchServiceOn() {
        console.log("Ligar serviço de busca azul");
    }

    searchServiceOff() {
        console.log("Desligar serviço de busca azul");
    }
}