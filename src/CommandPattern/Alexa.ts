import type { ICommand } from "./interface/ICommand";
import { NoCommand } from "./NoCommand";

export class Alexa {
    onCommands: ICommand[] = [];
    offCommands: ICommand[] = [];
    undoCommand: ICommand;

    public constructor() {
        let noCommand = new NoCommand();

        for(let i = 0; i < 7; i++) {
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }
        this.undoCommand = noCommand;
    }

    public setCommand(slot: number, onCommand: ICommand, offCommand: ICommand) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    public callAlexaOn(slot: number) {
        this.onCommands[slot].execute();
        this.undoCommand = this.onCommands[slot];
    }

    public callAlexaOff(slot: number) {
        this.offCommands[slot].execute();
        this.undoCommand = this.offCommands[slot];
    }

    public callAlexaRevert() {
        this.undoCommand.undo();
    }
}