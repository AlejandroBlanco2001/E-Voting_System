CREATE TABLE usuario (
    usuario varchar(50) NOT NULL UNIQUE,
    email varchar(50) NOT NULL UNIQUE,
    numeroDocu int NOT NULL UNIQUE,
    passwd varchar(50) NOT NULL UNIQUE,
    secret varchar(100),
    PRIMARY KEY (usuario),
    FOREIGN KEY (numeroDocu) REFERENCES persona(numeroDocu)
);

INSERT INTO
    usuario(usuario, email, numeroDocu, passwd, secret)
VALUES
    (
        'Juan Perez',
        'juan@email.com',
        123456,
        'juan123',
        'nose'
    ),
    (
        'Pedro Perez',
        'pedro@email.com',
        123457,
        'pedro123',
        'nose'
    ),
    (
        'Maria Perez',
        'maria@email.com',
        123458,
        'maria123',
        'nose'
    ),
    (
        'Jose Perez',
        'jose@email.com',
        123459,
        'jose123',
        'nose'
    ),
    (
        'Ana Perez',
        'ana@email.com',
        123460,
        'ana123',
        'nose'
    );