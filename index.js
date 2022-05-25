const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')

const vote = require("./src/server/routes/vote");
const auth = require('./src/server/routes/authentication')
const info = require('./src/server/routes/info')

const port = 8000;

const app = express()

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({ credentials: true, origin: true}));

app.listen(port, () => 
    console.log(`Server started on port ${port}`)
)

app.use('/static/', express.static(__dirname + '/src/server/images'))
app.use('/auth', auth)
app.use('/info', info)
app.use('/votes', vote)