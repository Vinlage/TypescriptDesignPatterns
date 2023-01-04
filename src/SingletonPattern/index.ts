import { MainScreen } from "./MainScreen";
import { SecondaryScreen } from "./SecondaryScreen";

export function getMainScreen() {
    return new MainScreen();
}

export function getSecondaryScreen() {
    return new SecondaryScreen();
}