const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./database/connection');
const filmsRouter = require('./routes/films');
const reviewRouter = require('./routes/review');

const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.FONT_ORIGIN || 'http://localhost:5174'
}));

app.get("/", (req, res) => {
    res.send("Server is Started");
});

app.use(express.json())

app.use('/films', filmsRouter);

app.use('/films', reviewRouter);

app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`);
});