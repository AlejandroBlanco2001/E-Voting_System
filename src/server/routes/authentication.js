const qrCode = require('qrcode')
const { Router } = require('express');
const router = Router()
const { authenticator } = require('otplib')
const db = require("../../database/query/db.js");

var session;

router.post('/create', (req, res) => {
    const { username, password } = req.body
    const secret = newBuffer(username + password).toString('base32')
    const token = authenticator.generateSecret(secret);
    try {
        const isValid = authenticator.check(token, secret)
    } catch (err) {
        console.error(err)
    }
    let code = qrCode.toDataURL(authenticator.keyuri(username, 'Vot-e', token))
})

router.post('/login', async(req, res) => {
    const { username, password } = req.body;
    // query to some database
    const sw = await db.searchUser(username, password);
    if (sw) {
        session = req.session
        session.userid = req.body.username
        console.log(req.session);
        res.json({ message: "OK" })
    } else {
        res.json({ message: "ERROR" })
    }
})

function getSession() {
    return session
}


module.exports = { router, getSession }