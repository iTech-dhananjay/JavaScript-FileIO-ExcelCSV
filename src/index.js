// index.js

import express from "express";
import fileRouter from './router/file.js'; // Corrected import path for fileRouter

const PORT = 8080;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use('/api/file', fileRouter);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
