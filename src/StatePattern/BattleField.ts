import type { ICharacter } from "./interface/ICharacter";

export class BattleField {
    player: ICharacter | null;
    enemies: ICharacter[];

    constructor() {
        this.enemies = [];
        this.player = null;
    }

    insertPlayerOnBattleField(player: ICharacter) : void {
        this.player = player;
        this.player.setBattleField(this);
    }

    insertEnemyOnBattleField(enemy: ICharacter) : void {
        this.enemies.push(enemy);
        enemy.setBattleField(this);
    }

    removePlayerFromBattleField() {
        this.player = null;
    }

    removeEnemyFromBattleField() {
        this.enemies.shift();
    }

    getEnemiesOnBattleField() : ICharacter[] {
        return this.enemies;
    }

    startBattle() {
        if (!this.player) {
            console.log("First you have to create the player!");
            return;
        }
        
        if (this.player.getState() == this.player.getIdleState()) 
            this.player.getState().searchEnemy();
    }

    async delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
}