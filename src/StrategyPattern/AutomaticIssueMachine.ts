import type { IAutomaticIssue } from './interface/IAutomaticIssue';

export class AutomaticIssueMachine {
    public strategy: IAutomaticIssue;

    constructor(strategy: IAutomaticIssue) {
        this.strategy = strategy;
    }

    issue(): void {
        this.strategy.login();
        this.strategy.searchFlight();
    }
}