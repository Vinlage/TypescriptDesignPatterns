import type { IState } from "../interface/IState";
import type { ICharacter } from "../interface/ICharacter";

export class EnemyFound implements IState  {
    character: ICharacter;

    constructor(character: ICharacter) {
        this.character = character;
    }

    async searchEnemy() {
        console.log("Enemy Already found!");
    }

    async chaseEnemy() {
        let battleField = this.character.getBattleField();
        await battleField?.delay(2000);
        console.log("Chasing enemy...");
        this.character.setState(this.character.getEnemyEngaged());
        this.character.getState().fightEnemy();
    }

    async fightEnemy() {
        console.log("It is not possible to fight enemies until engagement");
    }

    async returnToIdle() {
        console.log("It's not time to return to idle, it is time to fight!");
    }
}