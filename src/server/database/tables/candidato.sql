CREATE TABLE candidato (
    id SERIAL NOT NULL,
    nombre varchar(80) NOT NULL,
    partido VARCHAR(80) NOT NULL, 
    descripción VARCHAR(100),
    imagen VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO candidato (nombre, partido, descripción, imagen) VALUES 
(
    'Isaac Blanco',
    'Partido isaacneta',
    'Bla bla bla bla',
    'http://localhost:8000/static/p1.jpg'
),(
    'Dylan Cantillo',
    'Partido matematicas',
    'Ble ble ble ble',
    'http://localhost:8000/static/p2.jpg'
),(
    'Luis Caro',
    'Partido caro',
    'Bli bli bli bli',
    'http://localhost:8000/static/p3.jpg'
),(
    'Fabian Vargas',
    'Partido junior',
    'Blo blo blo blo',
    'http://localhost:8000/static/p4.jpg'
),(
    'German Vargas',
    'Partido miedo',
    'Blu blu blu blu',
    'http://localhost:8000/static/p5.jpg'
);