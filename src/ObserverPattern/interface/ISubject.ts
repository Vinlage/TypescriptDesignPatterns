interface ISubject {
    subscribe(observer: IObserver):void
    unsubscribe(observer: IObserver):void
    postMessage(message: string):void
    notify(message: string):void
}