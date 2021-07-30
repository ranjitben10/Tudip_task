const express = require('express')
const app = express()
const PORT = 6000
const mongoose = require('mongoose')
const {MongoURI} = require('./keys')

mongoose.connect(MongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on("connected",()=>{
    console.log("Connected to Database")
})
mongoose.connection.on("error",(err)=>{
    console.log(err)
})

require('./models/post')

app.use(express.json())
app.use(require('./routes/post'))
app.use(require('./routes/operation'))



app.listen(PORT,()=>{
    console.log("Server is running at "+ PORT)
})