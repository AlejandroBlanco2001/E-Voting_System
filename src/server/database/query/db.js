const pool = require('../conn/pool')

async function createPersona(tipoDocu, numeroDocu, nombre1, nombre2, apellido1, apellido2, fecha_nacimiento,
    lugar_nacimiento, direccion, telefono, rol, puestoVot) {
    // eslint-disable-next-line no-multi-str
    var query = `INSERT INTO persona VALUES (${tipoDocu}, ${numeroDocu}, ${nombre1}, ${nombre2}, ${apellido1},\
        ${apellido2}, ${fecha_nacimiento}, ${lugar_nacimiento}, ${direccion}, ${telefono},${rol}, ${puestoVot})`;
    try {
        await pool.query(query);
        return true;
    } catch {
        return false;
    }
}

async function searchUser(username, password) {
    var query = `SELECT * FROM usuario WHERE usuario = '${username}' AND passwd = '${password}'`;
    var result = await pool.query(query);
    return result
}

async function giveAllUsers() {
    return await pool.query("SELECT * FROM usuario")
}

async function createUser(username, numeroDocu, password, secret) {
    var query = `INSERT INTO usuario VALUES ('${username}', '${numeroDocu}', '${password}', '${secret}')`;
    try {
        await pool.query(query);
        return true;
    } catch {
        return false;
    }
}

async function createEleccion(nombre, fechaInicio, fechaFin) {
    var query = `INSERT INTO eleccion (nombre, fechaInicio, fechaFin) VALUES (
        '${nombre}', '${fechaInicio}', '${fechaFin}')`;
    try {
        await pool.query(query);
        return true;
    } catch {
        return false;
    }
}

async function createCandidato(nombre, partido, descripción, imagen) {
    var query = `INSERT INTO candidato VALUES ('${nombre}', '${partido}', '${descripción}', '${imagen}')`;
    try {
        await pool.query(query);
        return true;
    } catch {
        return false;
    }
}

async function searchCandidato(nombre, partido) {
    var query = `SELECT * FROM candidato WHERE nombre = '${nombre}' AND partido = '${partido}'`;
    var result = await pool.query(query);
    if (result.rows.length === 0) {
        return false;
    } else {
        return true;
    }
}

async function deleteCandidato(nombre, partido) {
    var query = `DELETE FROM candidato WHERE nombre = '${nombre}' AND partido = '${partido}'`;
    var result = await pool.query(query);
    if (result.rows.length === 0) {
        return false;
    } else {
        return true;
    }
}

async function updateNombreCandidato(newNombre, nombre, partido) {
    var query = `UPDATE candidato SET nombre = '${newNombre}' WHERE nombre = '${nombre}' AND partido = '${partido}'`;
    var result = await pool.query(query);
    if (result.rows.length === 0) {
        return false;
    } else {
        return true;
    }
}

module.exports = {
    createPersona,
    searchUser,
    giveAllUsers,
    createUser,
    createEleccion,
    createCandidato,
    searchCandidato,
    deleteCandidato,
    updateNombreCandidato,
}