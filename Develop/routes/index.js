const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.use('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;