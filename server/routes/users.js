var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var db = require('../models/db')

router.post('/login', function(req, res, next) {
  db.User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(user => 
    {

      if( bcrypt.compareSync(req.body.password, user.passwordHash) ) {
        //TODO get secret from config
        let token = jwt.sign({username:user.email}, 'secret', {expiresIn : '3h'});
        return res.status(200).json(token);

      } else {
       return res.status(401);
      } 
  })
  .catch(err => { return res.status(500) })
  
    
})

//Let this handle profile change as well?
router.post('/signup', function(req, res, next) {
    db.User.create(
        {            
            passwordHash: bcrypt.hashSync(req.body.password, 10),          
            email: req.body.email
        }
    )
    .then(
        () => res.status(200).send()
    )
    .catch(
        err => console.log(err)
    )
})


module.exports = router