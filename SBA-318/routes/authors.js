const express = require('express');
const router = express.Router();
const authors = require('../data/authors.json');

router.get('/', (req, res) => {
    res.json(authors);
});

module.exports = router;
