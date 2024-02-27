// file.js

import express from 'express';
import {readFile} from '../utils/fileUtils.js';
import path from 'path'

const router = express.Router();


router.get('/readFile', async (req, res) => {
    try {

        const filePath = '../../exports/files/Document.pdf'
        const fileData = await readFile(filePath);

        res.setHeader('Content-Type', 'application/pdf'); // Set the correct content type for PDF

        res.send(fileData);
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Internal Server Error');
    }
});


export default router;


