const router = require('express').Router();
const db = require("../../models");

router.get('/', (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.status(200).json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
})

module.exports = router;