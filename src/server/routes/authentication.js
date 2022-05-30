const qrCode = require('qrcode')
const base32 = require('base32')
const { Router } = require('express');
const router = Router()
const { authenticator } = require('otplib')
const db = require("../database/query/db.js");

var session;

router.post('/create', async (req, res) => {
    const { username, password, cedula} = req.body
    const secret     = authenticator.generateSecret()
    await db.createUser(username,cedula,password,secret);
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
    const { username, cedula, secret, password } = req.body;
    const sw = await db.searchUser(username, password, cedula)
    if (sw[0]) {
        const secret_query = sw[1] //Secret of the query
        if (!authenticator.check(secret,secret_query)){
            res.send({message: "ERROR"})
        }else{
            session = req.session
            session.userid = req.body.username
            console.log(req.session)
            res.send({ message: "OK" })
        }
    } else {
        res.send({ message: "ERROR" })
    }
})

function getSession() {
    return session
}


module.exports = { router, getSession }