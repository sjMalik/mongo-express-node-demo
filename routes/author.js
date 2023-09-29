const express = require('express');
const router = express.Router();

const Author = require('../model/author');

router.post('/', async (req, res) => {
    try {
        const author = new Author({
            name: req.body.name
        });
        await author.save();
        res.send({ author });
    } catch(e) {
        console.log(e)
        res.status(500).end();
    }
});

router.get('/', async (req, res) => {
    try {
        const authors = await Author.find({});
        res.send({ authors });
    }catch(e){
        res.status(500).end();
    }
})

module.exports = router;