const { Router } = require('express');
const router = Router()

router.post('/login', (req,res) => {
    console.log("working")
    res.sendStatus(200)
})



module.exports = router

