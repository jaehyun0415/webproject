var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET signup page. */
router.get('/signup',function(req , res){
  res.render("signup");
});


module.exports = router;
