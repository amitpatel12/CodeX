const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const url = process.env.MONGODB_URL
mongoose.connect(url)
.then(()=>{
    console.log("connection established successfully")
})
.catch(err => console.error("Failed to connect" + err))