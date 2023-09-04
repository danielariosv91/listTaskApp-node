import fs from 'fs'


const saveDatabase = (data) => {

    const file = './database/data.json';
    fs.writeFileSync(file, JSON.stringify(data));
}

const readDatabase = () => {
    const file = './database/data.json';

    if (!fs.existsSync(file)) return null;

    const info = fs.readFileSync(file, {encoding: 'utf-8'});
    const data = JSON.parse(info); 

    return data;
}

export {
    saveDatabase,
    readDatabase
}