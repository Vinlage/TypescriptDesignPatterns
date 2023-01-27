import { Player } from "./Players/Player";
import { BattleField } from "./BattleField";
import { Enemy } from "./Players/Enemy";

export function createBattleField() {
    return new BattleField();
}

export function createPlayer(name: string, life: number, attackPoints: number) {
    return new Player(name, life, attackPoints);
}

export function createEnemy(name: string, life: number, attackPoints: number) {
    return new Enemy(name, life, attackPoints);
}