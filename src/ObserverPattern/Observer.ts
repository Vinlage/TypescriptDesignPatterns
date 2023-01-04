export class Observer implements IObserver {
    constructor(public readonly name: string) {}
    update(message: string) {
       console.log(`${this.name} recebeu: <${message}>`)
    }
}