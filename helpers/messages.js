
import rd from 'readline'
import colors from 'colors';
import { resolve } from 'path';
const { Color } = colors;




const showMenu = () => {

    return new Promise((resolve) => {
        console.clear();

        console.log("====================")
        console.log("  Select an option  ")
        console.log("====================")


        console.log(`${'1'.green}. Create task`)
        console.log(`${'2'.green}. List task`)
        console.log(`${'3'.green}. Completed task`)
        console.log(`${'4'.green}. Pending task`)
        console.log(`${'5'.green}. Finish task`)
        console.log(`${'6'.green}. Delete task`)
        console.log(`${'0'.green}. Exit`);

        /** Create interface */
        const readline = rd.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Select an option: ', (option) => {
            readline.close();
            resolve(option);
        });
    })
}


const pause = () => {
    return new Promise((resolve, reject) => {
        /** Create interface */
        const readline = rd.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question(`Press ${'ENTER'.green} to continue`, (option) => {
            readline.close();
            resolve();
        });
    })
}



export {
    showMenu,
    pause
}