// utils/fileUtils.js

import fs from "fs";

async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, function (err, buf) {
            console.log('read file')
        });
        return data;
    } catch (error) {
        console.error('Error reading file:', error);
        throw error;
    }
}

export {readFile};
