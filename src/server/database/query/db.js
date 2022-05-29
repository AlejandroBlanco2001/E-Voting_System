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
    // eslint-disable-next-line no-multi-str
    var query = "SELECT * FROM usuario WHERE (usuario = '" + username + "' AND passwd = '" + password + "')\
    OR (email = '" + username + "' AND passwd = '" + password + "')";
    var result = await pool.query(query);
    return result
}

async function giveAllUsers(){
    return await pool.query("SELECT * FROM usuario")
}

async function createUser(username, email, numeroDocu, password, secret) {
    // eslint-disable-next-line no-multi-str
    var query = "INSERT INTO VALUES (\
        '" + username + "', '" + numeroDocu + "', '" + password + "', '" + secret + "')";
    try {
        await pool.query(query);
        return true;
    } catch {
        return false;
    }
}

async function createEleccion(nombre, fechaInicio, fechaFin) {
    // eslint-disable-next-line no-multi-str
    var query = "INSERT INTO eleccion(nombre, fechaInicio, fechaFin) VALUES (\
        '" + nombre + "', '" + fechaInicio + "', '" + fechaFin + "')";
    try {
        await pool.query(query);
        return true;
    } catch {
        return false;
    }
}

module.exports = {
    searchUser,
    createUser,
    createEleccion,
    giveAllUsers,
}