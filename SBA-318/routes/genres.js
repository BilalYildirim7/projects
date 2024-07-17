const express = require('express');
const router = express.Router();
const genres = require('../data/genres.json');

router.get('/', (req, res) => {
    res.json(genres);
});

module.exports = router;
