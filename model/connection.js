var express = require('express');
var mysql = require('mysql');
module.exports = function connection() {

	var host = 'localhost';
	var user = 'daniel';
	var password = 'leinad';
	var database = 'pokemondb';
	return con = mysql.createConnection({
		host: host,
		user: user,
		password: password,
		database: database
	});
};