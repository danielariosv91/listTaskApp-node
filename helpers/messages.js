import pkg from 'colors';
const { Color } = pkg;

const showMenu = () => {

    console.clear();

    console.log("====================")
    console.log("  Select an option  ")
    console.log("====================")


    console.log(`1. Create task`)
    console.log(`2. List task`)
    console.log(`3. Completed task`)
    console.log(`4. Pending task`)
    console.log(`5. Finish task`)
    console.log(`6. Delete task`)
    console.log(`0. Exit`)
}

export {
    showMenu
}