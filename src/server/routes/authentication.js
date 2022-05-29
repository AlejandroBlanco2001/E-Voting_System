const qrCode = require('qrcode')
const base32 = require('base32')
const { Router } = require('express');
const router = Router()
const { authenticator } = require('otplib')
const db = require("../../database/query/db.js");

var session;

router.post('/create', async(req, res) => {
    const { username, password } = req.body
    const secret = authenticator.generateSecret()
        //const test = await db.createUser(username,"123123123", password,secret);
    qrCode.toDataURL(authenticator.keyuri(username, "2FA Node App", secret), (err, url) => {
        if (err) {
            throw err;
        }
        res.send(url)
    })
})

router.post('/login', async(req, res) => {
    const { username, password } = req.body
    const sw = await db.searchUser(username, password)
    if (sw) {
        if (true) {
            session = req.session
            session.userid = req.body.username
            console.log(req.session);
            res.json({ message: "OK" })
        }
    } else {
        res.json({ message: "ERROR" })
    }
})

function getSession() {
    return session
}


module.exports = { router, getSession }