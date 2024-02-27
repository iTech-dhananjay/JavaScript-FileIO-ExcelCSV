import express from 'express';
import {readFile} from '../utils/fileUtils'

const router = express.Router()


router.post('/readFile', async (req, res) => {
    try {
        const filePath = '../../exports/files'
        const fileData = await readFile(filePath)
        res.send(fileData)
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Internal Server Error');
    }

})

export default router