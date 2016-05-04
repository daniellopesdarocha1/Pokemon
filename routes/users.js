var express = require('express');
var router = express.Router();
var modelUser = require('../model/User/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/cadastro', function (req,res,next) {
	res.render('./users/cadastro')
});
router.post('/cadastro', function (req, res, next) {
	var usuario = {};
	usuario.userName = req.body.username;
	usuario.senha = req.body.senha;
	modelUser.cadastrar(usuario, res);
});
module.exports = router;
