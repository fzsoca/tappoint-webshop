var express = require('express');
var router = express.Router();
var db = require('../models/db');


router.post('/', function(req, res, next) {
  //Check for upper limit
  

  let menuItems = [];

  let requests = req.body.menuItemIds.map((item) => {
    return db.MenuItem.findAll({
      where: {
        id : item
      }
    })
})
const sumCalculator = (accumulator, currElement) => accumulator + currElement[0].dataValues.price
let sum;
//As unreadable as it seems, apparently, this is how Sequelize returns values for legacy tables
Promise.all(requests).then((values) => {
  if(values.reduce(sumCalculator, 0) > 20000){
    return res.status(401).send({error: 'Over 200'});
  } else {
    menuItems = values;
  }
  
})

  db.Order.create({
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
  }).then(order => {
    menuItems.forEach(elem => {
      order.addMenuItems(elem, {through: {quantity: 1} })
      .then((order) => {})
      .catch(err => console.log(err));
    })
   
  })


})

module.exports = router;

