CREATE TABLE persona (
    tipoDocu varchar(50) NOT NULL CHECK(tipoDocu IN ('cedula', 'pasaporte', 'TI')),
    numeroDocu int NOT NULL,
    nombre1 varchar(50) NOT NULL,
    nombre2 varchar(50),
    apellido1 varchar(50) NOT NULL,
    apellido2 varchar(50) NOT NULL,
    fecha_nacimiento date NOT NULL,
    lugar_nacimiento varchar(50) NOT NULL,
    direccion varchar(50) NOT NULL,
    telefono varchar(50) NOT NULL,
    rol varchar(50) NOT NULL CHECK(rol IN('admin', 'candidato', 'ciudadano')),
    puestoVot SERIAL,
    PRIMARY KEY (numeroDocu),
    FOREIGN KEY (puestoVot) REFERENCES puesto(id)
);

INSERT INTO
    persona(
        tipoDocu,
        numeroDocu,
        nombre1,
        nombre2,
        apellido1,
        apellido2,
        fecha_nacimiento,
        lugar_nacimiento,
        direccion,
        telefono,
        rol,
        puestoVot
    )
VALUES
    (
        'cedula',
        123456,
        'Juan',
        'Perez',
        'Perez',
        'Sanchez',
        '1997-02-02',
        'Barranquilla',
        'Calle 123',
        '123456',
        'ciudadano',
        1
    ),
    (
        'pasaporte',
        123457,
        'Pedro',
        'Perez',
        'Perez',
        'Sanchez',
        '1997-02-02',
        'Barranquilla',
        'Calle 123',
        '123457',
        'ciudadano',
        2
    ),
    (
        'cedula',
        123458,
        'Maria',
        'Perez',
        'Perez',
        'Sanchez',
        '1997-02-02',
        'Barranquilla',
        'Calle 123',
        '123458',
        'ciudadano',
        2
    );

INSERT INTO
    persona(
        tipoDocu,
        numeroDocu,
        nombre1,
        nombre2,
        apellido1,
        apellido2,
        fecha_nacimiento,
        lugar_nacimiento,
        direccion,
        telefono,
        rol
    )
VALUES
    (
        'pasaporte',
        123459,
        'Jose',
        'Perez',
        'Perez',
        'Sanchez',
        '1997-02-02',
        'Barranquilla',
        'Calle 123',
        '123459',
        'candidato'
    ),
    (
        'cedula',
        123460,
        'Ana',
        'Perez',
        'Perez',
        'Sanchez',
        '1997-02-02',
        'Barranquilla',
        'Calle 123',
        '123460',
        'admin'
    );