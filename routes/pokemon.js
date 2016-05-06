var express = require('express')
var router = express.Router();
var modelPokemon = require('../model/Pokemon/Pokemon');

router.get('/', function (req, res) {
	res.redirect('./index');
});
router.get('/index', function (req, res) {
	res.render('./pokemon/index', modelPokemon.buscar("","",40,"");
});
router.get('/cadastrar', function (req, res) {
	res.render('./pokemon/cadastrar');
});
router.post('/cadastrar', function (req, res, next) {
	var pokemon = req.body;
	if(pokemon){
		modelPokemon.cadastrar(pokemon);
		res.redirect('./index');
	}
});

module.exports = router;