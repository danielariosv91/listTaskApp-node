import inquirer from 'inquirer';
import colors from 'colors'

const { Color } = colors;

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: '1',
                name: '1. Create task'
            },
            {
                value: '2',
                name: '2. Task list'
            },
            {
                value: '3',
                name: '3. Completed task'
            },
            {
                value: '4',
                name: '4. Pending task '
            },
            {
                value: '5',
                name: '5. Finish task'
            },
            {
                value: '6',
                name: '6. Delete task'
            },
            {
                value: '0',
                name: '0. Exit'
            },
        ]
    }
]

const inquirerMenu = async () => {
    console.clear();

    console.log("====================");
    console.log("  Select an option  ");
    console.log("====================");


    const { option } = await inquirer.prompt(questions)

    return option;
}

const pause = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'enter'.green} to continue`
        }
    ];

    await inquirer.prompt(question);
}

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Please, write a value';
                }

                return true;
            }
        }
    ]

    const { description } = await inquirer.prompt(question);

    return description;
}

const checkedList = async (tasks = []) => {
    const choices = tasks.map((task, index) => {

        const i = `${index + 1}`.green

        return {
            value: task.id,
            name: `${i} ${task.description}`,
            checked: (task.completedStatus) ? true : false
        }
    });

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Select',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(question);
    return ids;
}

const deleteTaskList = async (tasks = []) => {
    const choices = tasks.map((task, index) => {

        const i = `${index + 1}`.green

        return {
            value: task.id,
            name: `${i} ${task.description}`,
        }
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(questions);

    return id;
}

const confirm = async (message) => {
    const questions = [
        {
            type: 'confirm',
            name: 'ok',
            message,
        }
    ]

    const { ok } = await inquirer.prompt(questions);
    return ok;
}



export {
    inquirerMenu,
    readInput,
    pause,
    checkedList,
    deleteTaskList,
    confirm
}