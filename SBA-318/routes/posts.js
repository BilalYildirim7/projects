const express = require('express');
const router = express.Router();
const posts = require('../Models/posts');

router.get('/', (req, res) => {
    res.json(posts);
});

router.post('/', (req, res) => {
    const newPost = req.body;
    newPost.id = posts.length;
    posts.push(newPost);
    res.status(201).json(newPost);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedPost = req.body;
    posts[id] = updatedPost;
    res.json(updatedPost);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    posts = posts.filter(post => post.id != id);
    res.status(204).send();
});

module.exports = router;
