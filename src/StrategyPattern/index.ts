import { AzulStrategy, LatamStrategy, GolStrategy } from "./strategy";
import { AutomaticIssueMachine } from "./AutomaticIssueMachine";
import type { IAutomaticIssue } from "./interface/IAutomaticIssue";

export function createAzulStrategy() {
    return new AzulStrategy();
}

export function createLatamStrategy() {
    return new LatamStrategy();
}

export function createGolStrategy() {
    return new GolStrategy();
}

export function createAutomaticIssueMachine(strategy: IAutomaticIssue) {
    return new AutomaticIssueMachine(strategy);
}