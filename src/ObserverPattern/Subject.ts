import { Observer } from "./Observer";

export class Subject implements ISubject {
    private observers:Observer[] = [];
    constructor(public readonly name: string) {}
    subscribe(observer:Observer) {
        if(!(observer instanceof Observer)) {
            console.log('Objeto precisar ser do tipo observer!');
            return;
        }
        this.observers.push(observer)
    }
    unsubscribe(observer:Observer) {
        this.observers.map((element, index) => {
            if (element.name == observer.name) this.observers.splice(index, 1);
        })
    }
    notify(message: string) {
        this.observers.forEach(observer => {
            observer.update(message);
        })
    }
    postMessage(message: string) {
        message = `${this.name} postou: ${message}`;
        console.log(message);
        this.notify(message);
    }
}