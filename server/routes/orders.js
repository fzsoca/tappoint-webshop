var express = require('express');
var router = express.Router();

//Check for upper limit
router.post('/', function(req, res, next) {
  res.send('respond with a resource')
})

module.exports = router;

