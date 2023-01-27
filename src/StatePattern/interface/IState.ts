import { ICharacter } from "./ICharacter";

export interface IState {
    searchEnemy(): void;
    chaseEnemy(): void;
    fightEnemy(): void;
    returnToIdle(): void;
}