// file.js

import express from 'express';
import fs from 'fs';

import path from 'path'

const router = express.Router();

const filePath = '/Users/backend_development/Projects/JavaScript-FileIO-ExcelCSV/exports/files/temp.txt'
//const filePath = '/Users/backend_development/Projects/JavaScript-FileIO-ExcelCSV/exports/files/Document.pdf'

const destPath = '/Users/backend_development/Projects/JavaScript-FileIO-ExcelCSV/exports/files/write.txt'

router.get('/readFile', async (req, res) => {
    try {
        // const fileData = await fs.readFileSync(filePath); // return buffer data
        const fileData = await fs.readFileSync(filePath, 'utf8'); // return actual file data

        let contents = 'Hello World'
        await fs.writeFileSync(destPath, contents)

        res.status(200).json({success: true, fileData});
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Internal Server Error');
    }
});


export default router;


