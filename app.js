const express = require('express');
const app = express();
const connection = require('./database/connection');
const filmsRouter = require('./routes/films');
import cors from 'cors';

const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is Started");
});

app.use('/films', filmsRouter);


app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`);
});