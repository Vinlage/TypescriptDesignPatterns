import type { ICharacter } from "../interface/ICharacter";
import type { IState } from "../interface/IState";
import { Idle } from "../States/Idle";
import { EnemyFound } from "../States/EnemyFound";
import { EnemyEngaged } from "../States/EnemyEngaged";
import { EnemyDead } from "../States/EnemyDead";
import { PlayerDead } from "../States/PlayerDead";
import type { BattleField } from "../BattleField";

export class Player implements ICharacter {
    private name: string;
    private life: number;
    private attackPoints: number;
    private state: IState
    private target: ICharacter | null;
    private battleField: BattleField | null;
 
    private idleState: Idle;
    private enemyFound: EnemyFound;
    private enemyEngaged: EnemyEngaged;
    private enemyDead: EnemyDead;
    private playerDead: PlayerDead;

    constructor(name: string, life: number, attackPoints: number) {
        this.name = name;
        this.life = life;
        this.attackPoints = attackPoints
        this.target = null;
        this.battleField = null;

        this.idleState = new Idle(this);
        this.enemyFound = new EnemyFound(this);
        this.enemyEngaged = new EnemyEngaged(this);
        this.enemyDead = new EnemyDead(this);
        this.playerDead = new PlayerDead(this);

        this.state = this.idleState;
    }

    getName() {
        return this.name;
    }

    getLife() {
        return this.life;
    }

    setLife(life: number) {
        this.life = Math.max(life, 0);
    }

    getAttackPoints() {
        return this.attackPoints;
    }

    getState() {
        return this.state;
    }

    setState(state: IState) {
        this.state = state;
    }

    getTarget() {
        return this.target;
    }

    setTarget(target: ICharacter) {
        this.target = target;
    }

    getBattleField() {
        return this.battleField;
    }

    setBattleField(battleField: BattleField) {
        this.battleField = battleField;
    }

    setBattlefield(battleField: BattleField) {
        this.battleField = battleField;
    }

    getIdleState() {
        return this.idleState;
    }

    getEnemyFoundState() {
        return this.enemyFound;
    }

    getEnemyEngaged() {
        return this.enemyEngaged;
    }

    getEnemyDead() {
        return this.enemyDead;
    }

    getPlayerDead() {
        return this.playerDead;
    }

    attack() {
        this.target?.setLife(this.target.getLife() - this.attackPoints);
    }

    kill() {
        console.log(`${this.target?.getName()} Died!`);
        this.battleField?.removeEnemyFromBattleField();
        this.state = this.enemyDead;
        this.state.returnToIdle();
    }

    die() {
        console.log(`${this.name} Died!`);
        this.battleField?.removePlayerFromBattleField();
        this.state = this.playerDead;
    }
}