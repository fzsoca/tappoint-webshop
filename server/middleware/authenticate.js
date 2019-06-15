var jwt = require('jsonwebtoken')

module.exports = function authenticate(req,res,next){
    let token = req.query.token
  
    jwt.verify(token, 'secret', function(err, tokendata) {
      if(err) {
        return res.status(400).json({message:' Unauthorized request'});
      }
      if(tokendata) {
        req.decodedToken = tokendata;
        next();
      }
    })
  }