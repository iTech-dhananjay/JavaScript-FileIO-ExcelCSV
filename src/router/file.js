// file.js

import express from 'express';
import {readFile} from '../utils/fileUtils.js';
import path from 'path'

const router = express.Router();


router.get('/readFile', async (req, res) => {
    try {
        const filePath = '../../exports/files/temp.txt'
        const fileData = await readFile(filePath);
        res.status(200).json({success: true, fileData});
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Internal Server Error');
    }
});


export default router;


