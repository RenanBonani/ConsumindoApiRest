CREATE DATABASE cidade;

CREATE TABLE cidade(
    cidade_id SERIAL PRIMARY KEY,
    nome_cidade VARCHAR(120)
);

/*Inserindo as cidades atendidas*/
INSERT INTO cidade (cidade_id, nome_cidade) VALUES 
	(1, 'Andradina'),
	(2, 'Araçatuba'),
	(3, 'Birigui'),
	(4, 'Guararapes'),
	(5, 'Jales'),
	(6, 'Mirandópolis'),
	(7, 'Penápolis'),
	(8, 'Promissão'),
	(9, 'Três Lagoas');