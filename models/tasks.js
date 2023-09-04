import { Task } from "./task.js";

class Tasks {

    _list = {};

    constructor() {
        this._list = {};
    }

    create(description = '') {
        const task = new Task(description);

        this._list[task.id] = task;
    }
}

export {
    Tasks
}