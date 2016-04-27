var express = require('express');
var router = express.Router();
var con = require('../model/connection');


/* GET home page. */
router.get('/', function(req, res, next) {
console.log(con);
  con().connect(function (err) {
  	if(!err){
  		res.render('index', { title: 'On' });
  	}else{
  		res.render('index', { title: 'Off' });
  	}
  })
});

module.exports = router;
