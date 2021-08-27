const router = require('express').Router();
const apiRoutes = require('./api');
const exerciseRoutes = require('./exercise-routes');

router.use('/api', apiRoutes);
router.use('/exercise', exerciseRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;