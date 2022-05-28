const { Router } = require('express');
const router = Router()
var session;

router.post('/login', (req,res) => {
    const {username,password} = req.body
    // query to some database 
    if(username === "amadori"){
        session = req.session
        session.userid = req.body.username
        console.log(req.session);
        res.json({message:"OK"})
    }else{
        res.json({message:"ERROR"})
    }
})

function getSession(){
    return session
}


module.exports = {router,getSession}

