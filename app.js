//import { pause, showMenu } from "./helpers/messages.js"
import { inquirerMenu, readInput, pause} from "./helpers/inquirer.js";
import { saveDatabase } from "./helpers/saveFile.js";
import { Task } from "./models/task.js";
import { Tasks } from "./models/tasks.js";
//import { pause } from "./helpers/messages.js";


const main = async () => {
    let option = '';
    const tasks = new Tasks();

    do {

        option = await inquirerMenu();

        switch(option) {
            case '1':
                 const description = await readInput('Description: ');
                 tasks.create(description);
            break;
            case '2':
                //console.log(tasks.listAsArray) 
            break;
            case '3':
                 
            break;
            case '4': 
                 
            break;
            case '5':
                 
            break;
            case '6':
                 
            break;
        }

        saveDatabase(tasks.listAsArray);

        await pause();

    } while (option !== '0');
}

main()