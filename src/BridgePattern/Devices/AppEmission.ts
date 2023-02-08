import type { IEmission } from "../interface/IEmission";

export class AppEmission implements IEmission {
    startEmission() {
        console.log('Começando a emissão no app!');
        return "Emissão concluída!";
    }
}