import type { IState } from "../interface/IState";
import type { ICharacter } from "../interface/ICharacter";

export class Idle implements IState  {
    character: ICharacter;
    enemies: ICharacter[] | undefined;

    constructor(character: ICharacter) {
        this.character = character;
        this.enemies = [];
    }

    async searchEnemy() {
        console.log("Searching enemy...");
        let battleField = this.character.getBattleField();
        await battleField?.delay(2000);
        this.enemies = battleField?.getEnemiesOnBattleField();
        if (!this.enemies || this.enemies.length == 0) {
            console.log("No enemy found!");
            return;
        }
        console.log("Enemy Found!");
        this.character.setTarget(this.enemies[0]);
        this.character.setState(this.character.getEnemyFoundState());
        this.character.getState().chaseEnemy();
    }

    async chaseEnemy() {
        console.log("It is not possible to chase enemies if they are not found first");
    }

    async fightEnemy() {
        console.log("It is not possible to fight enemies until engagement");
    }

    async returnToIdle() {
        console.log("Player already in idle state!");
    }
}