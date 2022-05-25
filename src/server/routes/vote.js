const { Router } = require('express')
const router = Router()

router.get('/send', (req,res) => {
    console.log(req)
    res.sendStatus(200)
})

module.exports = router