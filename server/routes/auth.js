const router = require('express').Router();

router.post('/register', (req, res) => {
  res.send({
    message: `Register of ${req.body.email} message`
  });
});

router.get('/test', (req, res) => {
  res.send('test');
});

module.exports = router;
