import type { IState } from "./IState";
import type { BattleField } from "../BattleField";

export interface ICharacter {
    getName(): string;
    getLife(): number;
    setLife(life: number) : void;
    getAttackPoints(): number;
    getState(): IState;
    setState(state: IState) : void;
    getTarget() : ICharacter | null;
    setTarget(target: ICharacter) : void;
    getBattleField() : BattleField | null;
    setBattleField(battleField: BattleField) : void;
    getIdleState(): IState;
    getEnemyFoundState(): IState;
    getEnemyEngaged(): IState;
    getEnemyDead(): IState;
    getPlayerDead(): IState;
    attack() : void;
    kill() : void;
    die() : void;
}