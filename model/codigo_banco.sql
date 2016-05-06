create database pokemondb_2;

use pokemondb_2;

create table pokemon (
	Id int(11) primary key auto_increment,
	Nome varchar(20),
	Imagem varchar(20),
	Descricao varchar(255)
);

create table pokemontipo (
	IdPokemon int(11),
	IdTipo int(11)
);

create table time (
	Id int(11) primary key auto_increment,
	UserId int(11),
	Nome varchar(25),
	CreateAt date
);

create table timecompartilhado (
	UserId int(11),
	IdTime int(11)
);

create table timepokemon (
	IdTime int(11),
	IdPokemon int(11)
);

create table tipo (
	Id int(11) primary key auto_increment,
	Descricao varchar(15),
	Cor varchar(15)
);

create table usuario (
	UserID int(11) primary key auto_increment,
	UserName varchar(20),
	Senha varchar(20),
	Administrador tinyint(1)
);

alter table pokemontipo
add foreign key (IdPokemon)
references pokemon (Id);

alter table pokemontipo
add foreign key (IdTipo)
references tipo (Id);

alter table time
add foreign key (UserId)
references usuario (UserID);

alter table timecompartilhado
add foreign key (UserId)
references usuario (UserID);

alter table timecompartilhado
add foreign key (IdTime)
references time (Id);

alter table timepokemon
add foreign key (IdTime)
references time (Id);

alter table timepokemon
add foreign key (IdPokemon)
references pokemon (Id);
