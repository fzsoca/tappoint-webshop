var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var db = require('../models/db')

router.post('/login', function(req, res, next) {
  if(!req.body.email || !req.body.password){
    return res.status(401).send({error: "Wrong credentials"});
  }
  db.User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(user => 
    {

      if(user && bcrypt.compareSync(req.body.password, user.passwordHash) ) {
        //TODO get secret from config
        let token = jwt.sign({username:user.email}, 'secret', {expiresIn : '3h'});
        return res.status(200).json(token);

      } else {
       return res.status(401).send({error: "Wrong credentials"});
      } 
  })
  .catch(err => {console.log(err); return res.status(500).send({error: "Unexpected error"}) })
  
    
})

//Let this handle profile change as well?
router.post('/signup', function(req, res, next) {

    //should contain at least one upper and lowercase character, and must be at least 8 characters long
    const passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})")

    //this is a best effort email syntax validator, see
    //https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression
    const emailRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")

    if(!req.body.password || !passRegex.test(req.body.password)){
      return res.status(400).json({error: "Password must contain at least one upper and lowercase character, and must be at least 8 characters long"})
    }
    if(!req.body.email || !emailRegex.test(req.body.email)){
      return res.status(400).json({error: "Please enter a valid e-mail address"})
    }

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
        err => res.status(500).json({error: "Unexpected error"})
    )
})


module.exports = router