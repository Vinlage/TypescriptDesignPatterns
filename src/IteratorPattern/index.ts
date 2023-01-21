import { MaxCompany } from "./Companies/MaxCompany";
import { UDTCompany } from "./Companies/UDTCompany";
import { SearchFlights } from "./SearchFlights";
import type { ICompany } from "./interface/ICompany";

export function getMaxCompany() {
    return new MaxCompany();
}

export function getUDTCompany() {
    return new UDTCompany();
}

export function includeFlights(max: MaxCompany, udt: UDTCompany) {
    max.addFlight('vooMilhas1');
    max.addFlight('vooMilhas2');
    max.addFlight('vooMilhas3');
    udt.addFlight('vooOTA1');
    udt.addFlight('vooOTA2');
    udt.addFlight('vooOTA3');
}

export function getSearchFlights(max: MaxCompany, udt: UDTCompany) {
    return new SearchFlights(max, udt);
}