import { Subject } from "./Subject";
import { Observer } from "./Observer";

export function createSubject(name: string) {
    return new Subject(name);
}

export function createObserver(name: string) {
    return new Observer(name);
}