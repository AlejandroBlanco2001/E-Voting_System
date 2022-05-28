const pool = require('../conn/pool.js')

async function searchUser(username, password) {
    // eslint-disable-next-line no-multi-str
    var query = "SELECT * FROM usuario WHERE (usuario = '" + username + "' AND passwd = '" + password + "')\
     OR (email = '" + username + "' AND passwd = '" + password + "')";
    var result = await pool.query(query);
    if (result.rows.length === 0) {
        return false;
    } else {
        return true;
    }
}

async function createUser(username, email, password, numeroDocu, secret) {
    // eslint-disable-next-line no-multi-str
    var query = "INSERT INTO usuario(usuario, email, numeroDocu, passwd, secret) VALUES (\
        '" + username + "', '" + email + "', '" + password + "', '" + numeroDocu + "', '" + secret + "')";
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
    createEleccion
}