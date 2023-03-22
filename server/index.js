const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const PORT = 4000 || process.env.PORT
const bodyParser = require('body-parser');
const userRouter = require('./Routers/user')
const codeRouter = require('./Routers/code')
require('./db/config')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.use('/code', codeRouter)

app.listen(PORT, function(err) {
    if (err) {
        console.error(err)
    }
    console.log("app listening on port " + PORT)
})