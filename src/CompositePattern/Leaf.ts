import type { IComponent } from "./interface/IComponent";

export abstract class Leaf implements IComponent {
    operation() {}
}