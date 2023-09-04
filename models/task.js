import { v4 as uuidv4 } from 'uuid'

class Task {

    id = '';
    description = '';
    completedStatus = null;


    constructor(description) {
        this.id = uuidv4();
        this.description = description;
        this.completedStatus = null;
    }
}

export {
    Task
}