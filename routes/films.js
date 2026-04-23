const express = require('express');
const connection = require('../database/connection');
const filmControllers = require('../controllers/filmControllers');
const router = express.Router();



//INDEX get all films
router.get('/', filmControllers.index);

//SHOW get film by id
router.get('/:id', filmControllers.show);

module.exports = router;