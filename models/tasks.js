import { Task } from "./task.js";

class Tasks {

    _list = {};

    get listAsArray() {

        const list = [];

        Object.keys(this._list).forEach(key => {
            const task = this._list[key]
            list.push(task);
        })

        return list;
    }

    constructor() {
        this._list = {};
    }

    create = (description = '') => {
        const task = new Task(description);
        this._list[task.id] = task;
    }

    completedList = () => {
        this.listAsArray.forEach((task, index) => {
            const id = `${index + 1}`.green;
            const { description, completedStatus } = task;
            const status = ( completedStatus ) ? 'Completed'.green : 'Pending'.red;

            console.log(`${id} ${description} :: ${status}`)
        })
    }

    loadTaskFromArray = (tasks = []) => {
        tasks.forEach(task => {
            this._list[task.id] = task;
        });
    }
}

export {
    Tasks
}