import type { AzulSearchService } from "./SearchServices/AzulSearchService";
import type { GolSearchService } from "./SearchServices/GolSearchService";
import type { LatamSearchService } from "./SearchServices/LatamSearchService";
import type { AzulOfferService } from "./OfferServices/AzulOfferService";
import type { GolOfferService } from "./OfferServices/GolOfferService";
import type { LatamOfferService } from "./OfferServices/LatamOfferService";
import type { AzulIssueService } from "./IssueServices/AzulIssueService";
import type { GolIssueService } from "./IssueServices/GolIssueService";
import type { LatamIssueService } from "./IssueServices/LatamIssueService";
import type { AzulCheckService } from "./CheckServices/AzulCheckService";
import type { GolCheckService } from "./CheckServices/GolCheckService";
import type { LatamCheckService } from "./CheckServices/LatamCheckService";

export class FlightSystemFacade {
    azulSearchService: AzulSearchService;
    golSearchService: GolSearchService;
    latamSearchService: LatamSearchService;
    azulOfferService: AzulOfferService;
    golOfferService: GolOfferService;
    latamOfferService: LatamOfferService;
    azulIssueService: AzulIssueService;
    golIssueService: GolIssueService;
    latamIssueService: LatamIssueService;
    azulCheckService: AzulCheckService;
    golCheckService: GolCheckService;
    latamCheckService: LatamCheckService;

    constructor(
        azulSearchService: AzulSearchService,
        golSearchService: GolSearchService,
        latamSearchService: LatamSearchService,
        azulOfferService: AzulOfferService,
        golOfferService: GolOfferService,
        latamOfferService: LatamOfferService,
        azulIssueService: AzulIssueService,
        golIssueService: GolIssueService,
        latamIssueService: LatamIssueService,
        azulCheckService: AzulCheckService,
        golCheckService: GolCheckService,
        latamCheckService: LatamCheckService
    ) {
        this.azulSearchService = azulSearchService;
        this.golSearchService = golSearchService;
        this.latamSearchService = latamSearchService;
        this.azulOfferService = azulOfferService;
        this.golOfferService = golOfferService;
        this.latamOfferService = latamOfferService;
        this.azulIssueService = azulIssueService;
        this.golIssueService = golIssueService;
        this.latamIssueService = latamIssueService;
        this.azulCheckService = azulCheckService;
        this.golCheckService = golCheckService;
        this.latamCheckService = latamCheckService;
    }

    turnOnAzulSystem() {
        this.azulSearchService.searchServiceOn();
        this.azulOfferService.offerServiceOn();
        this.azulIssueService.issueServiceOn();
        this.azulCheckService.checkServiceOn();
    }

    turnOffAzulSystem() {
        this.azulSearchService.searchServiceOff();
        this.azulOfferService.offerServiceOff();
        this.azulIssueService.issueServiceOff();
        this.azulCheckService.checkServiceOff();
    }

    turnOnGolSystem() {
        this.golSearchService.searchServiceOn();
        this.golOfferService.offerServiceOn();
        this.golIssueService.issueServiceOn();
        this.golCheckService.checkServiceOn();
    }

    turnOffGolSystem() {
        this.golSearchService.searchServiceOff();
        this.golOfferService.offerServiceOff();
        this.golIssueService.issueServiceOff();
        this.golCheckService.checkServiceOff();
    }

    turnOnLatamSystem() {
        this.latamSearchService.searchServiceOn();
        this.latamOfferService.offerServiceOn();
        this.latamIssueService.issueServiceOn();
        this.latamCheckService.checkServiceOn();
    }

    turnOffLatamSystem() {
        this.latamSearchService.searchServiceOff();
        this.latamOfferService.offerServiceOff();
        this.latamIssueService.issueServiceOff();
        this.latamCheckService.checkServiceOff();
    }
}