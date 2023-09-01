import { pause, showMenu } from "./helpers/messages.js"


const main = async () => {
    let option = '';

    do {
        option = await showMenu();

        console.log({option})

        await pause();
    } while (option !== '0');
}

main()