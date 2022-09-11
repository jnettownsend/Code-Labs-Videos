import Observables from "../shared/observable.js";

export class UserService {
    user = {
        username: ''
    }
    userObsv;

    constructor(username){
        this.user.username = username;
        this.userObsv = new Observables();
    }

    next(data){
        this.userObsv.broadcast(data)
    }
}

export let userService = new UserService('John123')