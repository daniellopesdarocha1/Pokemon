var con = require('../connection');

module.exports = {
	cadastrar : function (user) {
		con().connect();
		con().query(
				"Insert into usuario (UserName, Senha, Administrador) values ('"+ user.userName +"', '"+ user.senha +"', "+false+");",
				function (err,result) {
					if(err){
						throw err
					}
				}
			);
		dispose(con);
		function dispose(con){
			return con().end();
		}
	},
	login : function (req, res) {
		console.log('vamos tentar fazer o login');
		var user = req.body;
		con().connect();
		var resultado = "";
		con().query("select * from usuario where UserName = '"+user.userName+"' and senha = '"+ user.senha +"'",
			function (err,result) {
				if(err){
					throw err;
					return false;
				}else{
					resultado = result[0];
					res.status(200).json(resultado);
				}
			}
		);
		con().end();


	}
}	
