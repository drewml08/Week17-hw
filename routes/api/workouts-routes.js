const router = require('express').Router();
const db = require("../../models");

router.get('/', (req, res) => {
    db.Workout.aggregate([
    {
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            }
        }
    }
    ])
    .then(dbWorkout => {
        res.status(200).json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.post('/', (req, res) => {
    db.Workout.create({})
    .then(dbWorkout => 
    {
        res.status(200).json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put('/:id', (req, res) => {
    db.Workout.findByIdAndUpdate( 
        req.params.id,
        {$push: {exercises: req.body}},
        {new: true, runValidators: true}
    ).then(dbWorkout => {
        res.status(200).json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

router.get('/range', (req, res) => {
    db.Workout.aggregate([
    {
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            }
        }
    }
    ])
    .sort({_id: -1})
    .limit(7)
    .then(dbWorkout => {
        res.status(200).json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;