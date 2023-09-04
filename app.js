//import { pause, showMenu } from "./helpers/messages.js"
import { inquirerMenu, pause } from "./helpers/inquirer.js";
//import { pause } from "./helpers/messages.js";


const main = async () => {
    let option = '';

    do {
        option = await inquirerMenu();


        await pause();

    } while (option !== '0');
}

main()