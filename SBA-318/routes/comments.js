const express = require('express');
const router = express.Router();
const comments = require('../Models/comments');

router.get('/', (req, res) => {
    res.json(comments);
});

router.post('/', (req, res) => {
    const newComment = req.body;
    newComment.id = comments.length;
    comments.push(newComment);
    res.status(201).json(newComment);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedComment = req.body;
    comments[id] = updatedComment;
    res.json(updatedComment);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(comment => comment.id != id);
    res.status(204).send();
});

module.exports = router;
