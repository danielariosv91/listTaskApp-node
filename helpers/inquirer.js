import inquirer from 'inquirer';
import colors from 'colors'

const { Color } = colors;

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: []
    }
]

const inquirerMenu = async () => {
    console.clear();

    console.log("====================");
    console.log("  Select an option  ");
    console.log("====================");


    const option = await inquirer.prompt(questions)

    return option;
}

export {
    inquirerMenu
}