//import { pause, showMenu } from "./helpers/messages.js"
import { inquirerMenu, readInput, pause} from "./helpers/inquirer.js";
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
                 console.log(description)
            break;
            case '2':
                console.log(tasks._list) 
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

        await pause();

    } while (option !== '0');
}

main()