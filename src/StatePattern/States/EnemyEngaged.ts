import type { IState } from "../interface/IState";
import type { ICharacter } from "../interface/ICharacter";

export class EnemyEngaged implements IState  {
    character: ICharacter;

    constructor(character: ICharacter) {
        this.character = character;
    }

    async searchEnemy() {
        console.log("Cannot search enemy while engaged!");
    }

    async chaseEnemy() {
        console.log("Cannot chase enemy while engaged!");
    }

    printBattleStatus(player: ICharacter, enemy: ICharacter) {
        console.log('\n\n');
        console.log(`//////////////////////////////////////////`);
        console.log(`${player.getName()} life: ${player.getLife()}`);
        console.log(`${enemy.getName()} life: ${enemy.getLife()}`);
        console.log(`//////////////////////////////////////////`);
        console.log('\n\n\n');
    }

    async fightEnemy() {
        let fight;

        let enemy: ICharacter | null = this.character.getTarget();
        if(!enemy) return;

        let battleField = this.character.getBattleField();
        await battleField?.delay(2000);
        console.log("Battle Start!!!");
        this.printBattleStatus(this.character, enemy);

        while(this.character.getLife() > 0 && enemy.getLife() > 0) {
            fight = Math.random();
            await battleField?.delay(2000);
            if (fight > 0.5) {
                console.log(`${this.character.getName()} Attacks and does ${this.character.getAttackPoints()} damage on ${enemy.getName()}!`);
                this.character.attack();
            } else {
                console.log(`${enemy.getName()} Attacks and does ${enemy.getAttackPoints()} damage on ${this.character.getName()}`);
                this.character.setLife(this.character.getLife() - enemy.getAttackPoints());
            }
            await battleField?.delay(2000);
            this.printBattleStatus(this.character, enemy);
        }

        await battleField?.delay(2000);
        if (enemy.getLife() <= 0) {
            this.character.kill();
        }
        if (this.character.getLife() <= 0) {
            this.character.die();
        }
    }

    async returnToIdle() {
        console.log("Cannot return to idle while engaged!");
    }
}