var express = require('express')
var router = express.Router()
var db = require('../models/db');

router.get('/:category', function(req, res, next) {
    db.MenuItem.findAll({
        where: 
        {
            category: req.params.category
        }
    })
    .then(
        data => res.json(data)
    )
    .catch(
        err => res.status(500)
    )
})

router.get('/categories', function(req, res, next) {
    db.MenuItem.findAll({
        group: ['category'],
        attributes: ['category']
    })
    .then(
       data => res.json(data)
    )
    .catch(
        err => res.json({}).status(404)
    )
})

module.exports = router;
