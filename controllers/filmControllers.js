const connection = require('../database/connection');

// INDEX - get all films
const index = (req, res) => {

    const sql = 'SELECT * FROM movies';

    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error executing query:", err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
}

// SHOW - get film by id 
const show = (req, res) => {

    const sql = 'SELECT * FROM movies WHERE id = ?';
    const id = req.params.id;

    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error("Error executing query:", err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Film not found' });
            return;
        }
        res.json(results[0]);
    });
}


module.exports = { index, show };