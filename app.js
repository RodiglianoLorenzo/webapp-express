const express = require('express');
const app = express();
const connection = require('./database/connection');

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Server is Started");
});

app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`);
});