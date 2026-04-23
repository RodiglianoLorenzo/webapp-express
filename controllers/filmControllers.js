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
    const id = req.params.id;

    const sqlFilm = 'SELECT * FROM movies WHERE id = ?';

    connection.query(sqlFilm, [id], (err, filmResults) => {
        if (err) {
            console.error("Error executing query:", err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        if (filmResults.length === 0) {
            res.status(404).json({ error: 'Film not found' });
            return;
        }

        const film = filmResults[0];

        const sqlReviews = 'SELECT * FROM reviews WHERE movie_id = ?';

        connection.query(sqlReviews, [id], (err, reviewResults) => {
            if (err) {
                console.error("Error executing query:", err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            film.reviews = reviewResults;
            res.json(film);
        });
    });
}


module.exports = { index, show };