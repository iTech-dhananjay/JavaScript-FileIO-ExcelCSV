// file.js

import express from 'express';
import {readFile} from '../utils/fileUtils.js'; // Corrected import path for readFile

const router = express.Router();

router.post('/readFile', async (req, res) => {
    try {
        const filePath = '../../exports/files'; // Ensure this path is correct
        const fileData = await readFile(filePath);
        res.send(fileData);
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
