import fs from "promise-fs"

async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return data;
    } catch (error) {
        throw error;
    }
}

export {readFile};