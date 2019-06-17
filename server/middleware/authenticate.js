var jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = function authenticate(req,res,next){
    const token = req.headers.authorization.split(" ")[1]
  
    jwt.verify(token, config["jwt-secret"], function(err, tokendata) {
      if(err) {
        return res.status(401).json({error:'Unauthorized request'});
      }
      if(tokendata) {
        req.decodedToken = tokendata;
        next();
      }
    })
  }