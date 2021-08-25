const router = require('express').Router();
const workoutRoutes = require('./workouts-routes');

router.use('/workouts', workoutRoutes);

module.exports = router;