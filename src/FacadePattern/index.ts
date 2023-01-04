import { FlightSystemFacade } from "./FlightSystemFacade";
import { AzulSearchService } from "./SearchServices/AzulSearchService";
import { GolSearchService } from "./SearchServices/GolSearchService";
import { LatamSearchService } from "./SearchServices/LatamSearchService";
import { AzulOfferService } from "./OfferServices/AzulOfferService";
import { GolOfferService } from "./OfferServices/GolOfferService";
import { LatamOfferService } from "./OfferServices/LatamOfferService";
import { AzulIssueService } from "./IssueServices/AzulIssueService";
import { GolIssueService } from "./IssueServices/GolIssueService";
import { LatamIssueService } from "./IssueServices/LatamIssueService";
import { AzulCheckService } from "./CheckServices/AzulCheckService";
import { GolCheckService } from "./CheckServices/GolCheckService";
import { LatamCheckService } from "./CheckServices/LatamCheckService";

export function createFacade() {
    let azulSearchService = new AzulSearchService();
    let golSearchService = new GolSearchService();
    let latamSearchService = new LatamSearchService();
    let azulOfferService = new AzulOfferService();
    let golOfferService = new GolOfferService();
    let latamOfferService = new LatamOfferService();
    let azulIssueService = new AzulIssueService();
    let golIssueService = new GolIssueService();
    let latamIssueService = new LatamIssueService();
    let azulCheckService = new AzulCheckService();
    let golCheckService = new GolCheckService();
    let latamCheckService = new LatamCheckService();
    return new FlightSystemFacade(
        azulSearchService,
        golSearchService,
        latamSearchService,
        azulOfferService,
        golOfferService,
        latamOfferService,
        azulIssueService,
        golIssueService,
        latamIssueService,
        azulCheckService,
        golCheckService,
        latamCheckService
    );
}