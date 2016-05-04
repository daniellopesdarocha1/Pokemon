var con = require('../connection');

module.exports = {
	cadastrar : function (usuario, res) {
		console.log('oi');
		con().connect();
		con().query(
				"Insert into usuario (UserName, Senha) values ('batata', '123');",
				function (err,result) {
					if(err){
						throw err
					}else{
						res.send('Foi');
					}
				}
			);
		dispose(con);
		function dispose(con){
			return con().end();
		}
	}	
}
