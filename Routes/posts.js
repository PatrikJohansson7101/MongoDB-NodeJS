const express = require("express");
const router = express.Router();
const Post = require("../Models/Post");

router.get("/", (req, res) => {
    res.send("Post page");
});

router.post("/", (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });

    post.save()
        .then((data) => {
            res.json(data); //Respond with a json and the data we are saving to our database.
        })
        .catch((err) => {
            res.json();
        });
});

module.exports = router;
