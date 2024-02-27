// In the command git push -u origin main, the -u flag stands for "upstream". When you use -u or --set-upstream, you're telling Git to set the default remote branch for the current local branch.

import express from "express";
import fileRouter from '../src/router/file'

const PORT = 8080

const app = express.Router()

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//Routes
app.use('/api/file', fileRouter)


//Start Server
app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
})

