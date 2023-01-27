import type { IState } from "../interface/IState";
import type { ICharacter } from "../interface/ICharacter";

export class EnemyDead implements IState  {
    character: ICharacter;

    constructor(character: ICharacter) {
        this.character = character;
    }

    async searchEnemy() {
        console.log("Enemy is Dead");
    }

    async chaseEnemy() {
        console.log("Enemy is Dead");
    }

    async fightEnemy() {
        console.log("Enemy is Dead");
    }

    async returnToIdle() {
        console.log("Returning to idle");
        this.character.setState(this.character.getIdleState());
        this.character.getState().searchEnemy();
    }
}