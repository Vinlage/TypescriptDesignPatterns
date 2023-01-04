import type { ICommand } from "../interface/ICommand";

export class MacroCommand implements ICommand {
    commands: ICommand[];

    constructor(commands: ICommand[]) {
        this.commands = commands;
    }

    public execute(): void {
        for (let i = 0; i < Object.keys(this.commands).length; i++) {
            this.commands[i].execute();
        }
    }

    public undo(): void {
        for (let i = 0; i < Object.keys(this.commands).length; i++) {
            this.commands[i].undo();
        }
    }
}