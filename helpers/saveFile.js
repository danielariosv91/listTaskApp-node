import fs from 'fs'


const saveDatabase = (data) => {

    const file = './database/data.json';
    fs.writeFileSync(file, JSON.stringify(data));
}

export {
    saveDatabase
}