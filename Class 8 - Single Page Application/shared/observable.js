export default class Observables {
    subscribers = [];

    constructor() {}

    subscribe(fn) {
        this.subscribers.push(fn);
    }

    unSubscribe(fn) {
        this.subscribers = this.subscribers.filter((subscriber) => {
            return subscriber != fn;
        });
    }

    broadcast(value) {
        this.subscribers.forEach((sub) => {
            sub(value);
        });
    }
}