var express = require('express');
var router = express.Router();
var modelUser = require('../model/User/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('./index');
});
router.get('/cadastro', function (req,res,next) {
	res.render('./users/cadastro');
});
router.get('/index', function (req,res,next) {
	res.render('./users/index');
});
router.post('/cadastro', function (req, res, next) {
	var usuario = {};
	usuario.userName = req.body.username;
	usuario.senha = req.body.senha;
	modelUser.cadastrar(usuario);
	res.redirect('./index');
});
router.post('/login', function (req, res, next) {
	if(modelUser.login(req, res)){
		console.log('aqui');
		console.log(req.session.user);
		res.redirect('./');
	}else{
		res.redirect('./index');
	}	
});
module.exports = router;

