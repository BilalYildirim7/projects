const express = require("express")
const router = express.Router()

const posts =require("../Data/posts")

// Posts Route
router.get("/", (req, res) => { // Corrected route path to plural for consistency
    res.json(posts);
});


router.get("/:id", (req, res, next) => { // Corrected res object
    const post = users.find((post) => post.id == req.params.id);
    if (post) { 
        res.json(post);
    } else next()
});








module.exports=router 