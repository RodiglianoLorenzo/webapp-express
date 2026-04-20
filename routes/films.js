const express = require('express');
const connection = require('../database/connection');
const router = express.Router();


//INDEX get all films
router.get('/', (req, res) => {
    connection.query('SELECT * FROM movies', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching films');
        } else {
            res.json(results);
        }
    });
});


//SHOW get film by id
router.get('/:id', (req, res) => {
    connection.query('SELECT * FROM movies WHERE id = ?', [req.params.id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching film');
        } else {
            if (results.length === 0) {
                res.status(404).send('Film not found');
            } else {
                res.json(results[0]);
            }
        }
    });
});


module.exports = router;