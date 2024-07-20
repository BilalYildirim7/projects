const express = require('express');
const router = express.Router();
const users = require('../Models/users');

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.status(201).json(newUser);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    users[id] = updatedUser;
    res.json(updatedUser);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id != id);
    res.status(204).send();
});

module.exports = router;
