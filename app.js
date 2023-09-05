//import { pause, showMenu } from "./helpers/messages.js"
import { inquirerMenu, readInput, pause, checkedList, deleteTaskList, confirm } from "./helpers/inquirer.js";
import { readDatabase, saveDatabase } from "./helpers/saveFile.js";
import { Task } from "./models/task.js";
import { Tasks } from "./models/tasks.js";
//import { pause } from "./helpers/messages.js";


const main = async () => {
    let option = '';

    const tasks = new Tasks();
    const taskDatabase = readDatabase();


    if (taskDatabase) {
        tasks.loadTaskFromArray(taskDatabase);
    }

    do {

        option = await inquirerMenu();

        switch (option) {
            case '1':
                const description = await readInput('Description: ');
                tasks.create(description);
                break;
            case '2':
                console.log(tasks.showAllTask())
                break;
            case '3':
                console.log(tasks.showTaskByStatus(true))
                break;
            case '4':
                console.log(tasks.showTaskByStatus(false))
                break;
            case '5':
                const ids = await checkedList(tasks.listAsArray);
                
                tasks.toggleStatusTask(ids);
                break;
            case '6':
                const id = await deleteTaskList(tasks.listAsArray);
                const wantDelete = await confirm('Ar you sure?');

                console.log({id})


                if (wantDelete) {
                    tasks.deleteTask(id);
                    console.log('Deleted task')
                }
                break;
        }

        saveDatabase(tasks.listAsArray);

        await pause();

    } while (option !== '0');
}

main()