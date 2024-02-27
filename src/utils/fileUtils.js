// utils/fileUtils.js

import {promises as fsPromises} from "fs";

async function readFile(filePath) {
    try {
        console.log(filePath, 'filePath')
        const data = await fsPromises.readFile(filePath);
        return data;
    } catch (error) {
        console.error('Error reading file:', error);
        throw error;
    }
}

export {readFile};
