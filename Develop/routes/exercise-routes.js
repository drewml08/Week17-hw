const router = require('express').Router();
const db = require("../models");

router.get('/', (req, res) => {
    console.log(req.query);
    db.Exercise.find({_id: req.query.id})
        .then(dbExercise => {
            res.status(200).json(dbExercise);
        })
        .catch(err => {
            res.json(err);
        })
})

module.exports = router;