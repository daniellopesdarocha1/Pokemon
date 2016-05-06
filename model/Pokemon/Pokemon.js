var con = require('../connection');
module.exports = {
	cadastrar : function (pokemon) {
		con().connect();
		con().query(
			"Insert into pokemon (nome, imagem, descricao) values ('"+ pokemon.nome +"', '"+ pokemon.imagem +"', "+ pokemon.descricao +");",
			function (err,result) {
				if(err){
					throw err
				}
			}
		);
	},
	buscar : function (campos, where, quantidade, orderby) {
		con().connect();
		var query = 'select * from pokemon';
		if(!campos && campos != ""){
			query = "select " + campos +" from pokemon";
		}
		if(!where && where != ""){
			query = query + " where " + where;
		}
		if(!quantidade && quantidade != ""){
			query = query + " limit " + quantidade;
		}
		if(!orderby && orderby != ""){
			query = query + " Order By " + orderby;
		}
		con().query(query, function (err, result) {
			if(err){
				throw err;
			}else{
				
			}
		});
	}
}