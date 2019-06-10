var express = require('express')
var router = express.Router()

router.post('/login', function(req, res, next) {
    res.send(200)
})

//Let this handle profile change as well?
router.post('/signup', function(req, res, next) {
    res.send(200);
})


module.exports = router