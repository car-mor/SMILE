DROP DATABASE IF EXISTS smile;
CREATE DATABASE smile;

USE smile;

CREATE TABLE usuario (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  Nombre varchar(30) NOT NULL,
  Apellido varchar(30) NOT NULL,
  Correo varchar(50) NOT NULL UNIQUE,
  Contrasena varchar(60) NOT NULL,
  Fecha_Nacimiento date NOT NULL,
  url_Foto varchar(200) DEFAULT NULL
);


CREATE TABLE grupo (
  id_Grupo int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  Nombre varchar(50) NOT NULL,
  Descripcion text DEFAULT NULL,
  Cantidad_Miembros int NOT NULL DEFAULT 0,
  Url_foto varchar(200) DEFAULT NULL
);

CREATE TABLE mensajes (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  usuario_id int NOT NULL,
  grupo_id int NOT NULL,
  mensaje text NOT NULL,
  fecha datetime NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON DELETE CASCADE,
  FOREIGN KEY (grupo_id) REFERENCES grupo(id_Grupo) ON DELETE CASCADE
);


CREATE TABLE miembro_grupo (
  id_Miembro_Grupo int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_Grupo int NOT NULL,
  id_Usuario int NOT NULL,
  FOREIGN KEY (id_Grupo) REFERENCES grupo(id_Grupo) ON DELETE CASCADE,
  FOREIGN KEY (id_Usuario) REFERENCES usuario(id) ON DELETE CASCADE
);

CREATE TABLE podcast (
  id_Podcast int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  titulo varchar(250) NOT NULL,
  autor varchar(100) NOT NULL,
  url varchar(200) NOT NULL,
  anio_publicacion int DEFAULT NULL
);


CREATE TABLE publicacion (
  id_Publicacion int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_Usuario int NOT NULL,
  Titulo varchar(100) NOT NULL,
  fecha_Creacion datetime NOT NULL DEFAULT (CURRENT_DATE),
  contenido text NOT NULL,
  categoria varchar(50) NOT NULL,
  FOREIGN KEY (id_Usuario) REFERENCES usuario(id) ON DELETE CASCADE
);

create TABLE especialista (
  id_Especialista int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  Nombre varchar(30) NOT NULL,
  Apellido varchar(30) NOT NULL,
  Titulo varchar(50) NOT NULL,
  Numero varchar(10) NOT NULL,
  Correo varchar(50) NOT NULL UNIQUE,
  Modalidad varchar(50) NOT NULL,
  Ubicacion varchar(150) NOT NULL
);

create TABLE actividadRecreativa (
  id_Actividad_Recreativa int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  Titulo varchar(100) NOT NULL,
  url_imagen varchar(200) NOT NULL,
  url_actividad varchar(200) NOT NULL
);

-- Insertar usuarios

insert into usuario (Nombre, Apellido, Correo, Contrasena, Fecha_Nacimiento, url_Foto) values ("Angel", "Contreras", "ar.contreras372@gmail.com", "12345", DATE '2003-07-02', "https://mx.web.img3.acsta.net/newsv7/21/06/24/00/27/1627532.jpg");

insert into usuario (Nombre, Apellido, Correo, Contrasena, Fecha_Nacimiento, url_Foto) values ("Derek", "Cabrera", "arcangel557.ac@gmail.com", "12345", DATE '2003-07-22', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdU0amKFItQqZ1gR99FdSByKC7Jh7vsqzaw&s");

-- Insertar grupos
insert into grupo (Nombre, Descripcion, Cantidad_Miembros, Url_foto) values ("Grupo de amigos", "Grupo de amigos de la infancia", 2, "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b");
insert into grupo (Nombre, Descripcion, Cantidad_Miembros, Url_foto) values ("ESCOM", "ESCUMEROS", 10, "https://upload.wikimedia.org/wikipedia/commons/5/5d/EscudoESCOM.png");

-- insertar miembros a grupos
insert into miembro_grupo (id_Grupo, id_Usuario) values (1, 1);
insert into miembro_grupo (id_Grupo, id_Usuario) values (1, 2);
insert into miembro_grupo (id_Grupo, id_Usuario) values (2, 1);

-- insertar podcast
insert into podcast (titulo, autor, url, anio_publicacion) values ("El arte de la Manipulación - Leer a las personas: Conviértase en un maestro de la psicología a partir de ahora, reconozca inmediatamente las técnicas de manipulación sistemática y utilícelas en su propio beneficio", "David Campbell", "https://open.spotify.com/intl-es/track/74DKL3o1TdwQ8sMUolvdG9?si=119123a9471a4d6f", 2022);

insert into podcast (titulo, autor, url, anio_publicacion) values ("Los 7 Hábitos de la Gente Altamente Efectiva (abreviado)", "Stephen R. Covey", "https://open.spotify.com/intl-es/track/71LfiCClrC4UbhYJUcT6Do?si=915725bf27d34d44", 2014);

insert into podcast (titulo, autor, url, anio_publicacion) values ("El Poder de la Mente Subconsciente", "Joseph Murphy", "https://www.youtube.com/watch?v=3v1n6v1J9Zk", 2018);

insert into podcast (titulo, autor, url, anio_publicacion) values ("PSICOLOGIA OSCURA", "Carlos Alberto Irineo Monroy", "https://open.spotify.com/episode/2RJ0i8jDk7MydZJkHPdUWo?si=375c6fe1531e4705", 2021);

-- insertar publicacion
insert into publicacion (id_Usuario, Titulo, contenido, categoria) values (1, "El arte de la Manipulación", "Leer a las personas: Conviértase en un maestro de la psicología a partir de ahora, reconozca inmediatamente las técnicas de manipulación sistemática y utilícelas en su propio beneficio", "Psicología");

insert into publicacion (id_Usuario, Titulo, contenido, categoria) values (1, "Actitud de psicologos", "La actitud de los psicologos en la actualidad", "Psicología");

insert into publicacion (id_Usuario, Titulo, contenido, categoria) values (2, "Los 7 Hábitos de la Gente Altamente Efectiva", "Los 7 Hábitos de la Gente Altamente Efectiva (abreviado)", "Desarrollo Personal");

-- insertar especialista
insert into especialista (Nombre, Apellido, Titulo, Numero, Correo, Modalidad, Ubicacion) values ("Carlos", "Irineo", "Psicologo", "5512345678", "carlos@smile.com", "Presencial", "Calz. Taxqueña 12, CDMX");

insert into especialista (Nombre, Apellido, Titulo, Numero, Correo, Modalidad, Ubicacion) values ("David", "Campbell", "Psicologo", "5512345678", "davidCamp@smile.com", "Virtual", "Calle 7 #12, 04870, CDMX");

-- insertar actividad recreativa
insert into actividadRecreativa (Titulo, url_imagen, url_actividad) values ("Sudoku", "https://www.sudoku.com.mx/wp-content/uploads/2021/06/sudoku-1.jpg", "https://sudoku.com/es");

insert into actividadRecreativa (Titulo, url_imagen, url_actividad) values ("Serpientes y escaleras", "https://fisiquimicamente.com/recursos-fisica-quimica/juegos/2eso/serpientes-y-escaleras/featured.png", "https://www.1001juegos.com/juego/snakes-and-ladders");

insert into actividadRecreativa (Titulo, url_imagen, url_actividad) values ("Ajedrez", "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpZTvydV.png", "https://www.chess.com/home");

-- Ver info
select * from usuario;
select * from grupo;
select * from miembro_grupo;
select * from podcast;
select * from publicacion;
select * from especialista;
select * from actividadRecreativa;
select * from mensajes;