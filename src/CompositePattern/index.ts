import { IssuingServiceGol } from "./IssuingServices/IssuingServiceGol";
import { OfferServiceGol } from "./OfferServices/OfferServiceGol";
import { Gol } from "./Companies/Gol";
import { IssuingServiceAzul } from "./IssuingServices/IssuingServiceAzul";
import { OfferServiceAzul } from "./OfferServices/OfferServiceAzul";
import { Azul } from "./Companies/Azul";
import { IssuingServiceLatam } from "./IssuingServices/IssuingServiceLatam";
import { OfferServiceLatam } from "./OfferServices/OfferServiceLatam";
import { Latam } from "./Companies/Latam";
import type { Composite } from "./Composite";
import { Companies } from "./Companies/Companies";

export function createGolSystem() {
    const issuingServiceGol = new IssuingServiceGol();
    const offerServiceGol = new OfferServiceGol();

    const golSystem = new Gol().add(issuingServiceGol).add(offerServiceGol);
    return golSystem;
}

export function createAzulSystem() {
    const issuingServiceAzul = new IssuingServiceAzul();
    const offerServiceAzul = new OfferServiceAzul();

    const azulSystem = new Azul().add(issuingServiceAzul).add(offerServiceAzul);
    return azulSystem;
}

export function createLatamSystem() {
    const issuingServiceLatam = new IssuingServiceLatam();
    const offerServiceLatam = new OfferServiceLatam();

    const latamSystem = new Latam().add(issuingServiceLatam).add(offerServiceLatam);
    return latamSystem;
}

export function createCompaniesSystem(cia1: Composite, cia2: Composite, cia3: Composite) {
    const companiesSystem = new Companies([cia1, cia2, cia3]);
    return companiesSystem;
}