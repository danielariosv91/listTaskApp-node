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

    showAllTask = () => {
        this.listAsArray.forEach((task, index) => {
            const id = `${index + 1}`.green;
            const { description, completedStatus } = task;
            const status = (completedStatus) ? 'Completed'.green : 'Pending'.red;

            console.log(`${id} ${description} :: ${status}`)
        })
    }

    showTaskByStatus = (showCompletedTask = true) => {

        this.listAsArray.forEach((task) => {

            const { description, completedStatus } = task;
            const status = (completedStatus) ? 'Completed'.green : 'Pending'.red;

            if (showCompletedTask) {
                if (completedStatus) {
                    console.log(`${description} :: ${status}`)
                }
            } else {
                console.log(`${description} :: ${status}`)
            }

        })
    }

    loadTaskFromArray = (tasks = []) => {
        tasks.forEach(task => {
            this._list[task.id] = task;
        });
    }

    toggleStatusTask = (ids = []) => {
        ids.forEach(id => {
            const task = this._list[id]

            if (!task.completedStatus) {
                task.completedStatus = true;
            }
        });

        this.listAsArray.forEach(task => {
            if (!ids.includes(task.id)) {
                this._list[task.id].completedStatus = null;
            }
        })
    }

    deleteTask = (id = '') => {
        if (this._list[id]) {
            delete this._list[id];
        }
    }
}

export {
    Tasks
}