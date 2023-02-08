import type { IEmission } from "../interface/IEmission";

export class WebEmission implements IEmission {
    startEmission() {
        console.log('Começando a emissão web!');
        return "Emissão concluída!";
    }
}