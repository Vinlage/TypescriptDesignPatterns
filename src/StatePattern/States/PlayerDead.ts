import type { IState } from "../interface/IState";
import type { ICharacter } from "../interface/ICharacter";

export class PlayerDead implements IState  {
    character: ICharacter;

    constructor(character: ICharacter) {
        this.character = character;
    }

    async searchEnemy() {
        console.log("Player is Dead");
    }

    async chaseEnemy() {
        console.log("Player is Dead");
    }

    async fightEnemy() {
        console.log("Player is Dead");
    }

    async returnToIdle() {
        console.log("Player is Dead");
    }
}