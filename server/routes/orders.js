var express = require('express');
var router = express.Router();
var authenticate = require('../middleware/authenticate')
var db = require('../models/db');


router.post('/', authenticate, function(req, res, next) {


  if(!req.body.name ||
     !req.body.phone ||
     !req.body.address) {
     return res.status(400).send()
    } 
  let menuItems = [];

  let requests = req.body.menuItemIds.map((item) => {
    return db.MenuItem.findAll({
      where: {
        id : item.id
      }
    })
})
const sumCalculator = (accumulator, currElement) => accumulator + (currElement[0].dataValues.price * req.body.menuItemIds.find(x => x.id == currElement[0].dataValues.id).count)
let sum;
//As unreadable as it seems, apparently, this is how Sequelize returns values for legacy tables
Promise.all(requests).then((values) => {
  if(values.length == 0){
    return res.status(400).send();
  }
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
      order.addMenuItems(elem, {through: {quantity: req.body.menuItemIds.find(x => x.id == elem[0].dataValues.id).count} })
      .then((order) => {})
      .catch(err => console.log(err));
    })
   
  })


})

module.exports = router;

