const qrCode = require('qrcode')
const base32 = require('base32')
const { Router } = require('express');
const router = Router()
const { authenticator } = require('otplib')
const db = require("../database/query/db.js");

var session;

router.post('/create', async(req, res) => {
    const { username, password } = req.body
    const secret = authenticator.generateSecret()
    const test = await db.createUser(username,"test@gmail.com",password,"123123123",secret);
    qrCode.toDataURL(authenticator.keyuri(username, "2FA Node App", secret), (err, url) => {
        if (err) {
            throw err;
        }
        res.send(url)
    })
})

router.get('/all', async (req,res) => {
    const sw = await db.giveAllUsers()
    console.log(sw);
    res.json({message:"OK"})
})

router.post('/login', async (req, res) => {
    const { username, password, secret } = req.body
    const sw = await db.searchUser(username, password)
    console.log(sw)
    if (sw.rows.length !== 0) {
        const secret_query = 0 //Secret of the query
        if (!authenticator.check(secret,secret_query)){
            res.sendStatus(500)
        }
        session = req.session;
        session.userid = req.body.username;
        console.log(req.session);
        res.json({ message: "OK" });
    } else {
        res.json({ message: "ERROR" })
    }
})

function getSession() {
    return session
}


module.exports = { router, getSession }