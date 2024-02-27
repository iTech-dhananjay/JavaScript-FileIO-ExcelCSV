// file.js

import express from 'express';
import fs from 'fs';

import path from 'path'

const router = express.Router();

const filePath = '/Users/backend_development/Projects/JavaScript-FileIO-ExcelCSV/exports/files/temp.txt'
//const filePath = '/Users/backend_development/Projects/JavaScript-FileIO-ExcelCSV/exports/files/Document.pdf'

router.get('/readFile', async (req, res) => {
    try {
        const fileData = await fs.readFileSync(filePath);

        res.status(200).json({success: true, fileData});
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Internal Server Error');
    }
});


export default router;


