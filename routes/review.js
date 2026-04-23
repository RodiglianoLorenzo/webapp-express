const express = require('express');
const router = express.Router();
const { filmReview } = require('../controllers/reviewControllers');

router.post('/:id/reviews', filmReview);

module.exports = router;