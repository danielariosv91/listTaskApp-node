//import { pause, showMenu } from "./helpers/messages.js"
import { inquirerMenu } from "./helpers/inquirer.js";


const main = async () => {
    let option = '';

    do {
        option = await inquirerMenu();


    } while (option !== '0');
}

main()