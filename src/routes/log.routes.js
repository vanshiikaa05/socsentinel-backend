const router = require('express').Router();

router.post('/', (req, res) => {
  res.json({ message: 'Log route working' });
});

module.exports = router;
