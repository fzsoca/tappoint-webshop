var express = require('express');
var router = express.Router();
var db = require('../models/db');


router.post('/', function(req, res, next) {
  //Check for upper limit
  const sumCalculator = (accumulator, currElement) => accumulator + currElement.price;

  let sum = req.body.menuItems.reduce( sumCalculator, 0);
  if(sum > 20000)
  {
    return res.status(401);
  }

  let menuItems = [];
  req.body.menuItems.forEach(element => {
    db.MenuItem.findAll({
      where: {
        id : element
      }
    })
    .then(elem => {
      menuItems.push(elem);
    })
  });

  db.Order.create({
    email : req.body.email,
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
  }).then(order => {
    order.setMenuItems(menuItems)
      .then((order) => console.log(order));
  })


})

module.exports = router;

