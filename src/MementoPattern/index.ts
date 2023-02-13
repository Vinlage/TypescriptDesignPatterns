import { GameState } from "./GameState";
import { StateManager } from "./StateManager";

export function createGameState() {
    return new GameState({ level: 1, life: 10 });
}

export function createStateManager(gameState: GameState) {
    return new StateManager(gameState);
}