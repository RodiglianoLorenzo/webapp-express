const connection = require('../database/connection');

// STORE store the review
const filmReview = (req, res) => {
    const movieId = Number(req.params.id);
    const { name, vote, text } = req.body;

    const sql = 'INSERT INTO reviews (movie_id, name, vote, text) VALUES (?,?,?,?)';

    connection.query(sql, [movieId, name, vote, text], (err, results) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.status(201).json({
            message: "Review successfully submite"
        });
    });
}

module.exports = { filmReview }
