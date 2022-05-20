const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')

const port = 3000;

const app = express()

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.listen(port, () => 
    console.log(`Server started on port ${port}`)
)

