import type { ICommand } from "./interface/ICommand";

export class NoCommand implements ICommand {
    public execute(): void {}
    public undo(): void {}
}