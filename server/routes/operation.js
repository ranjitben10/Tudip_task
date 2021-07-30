const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Student = mongoose.model("Student")

router.post('/search',(req,res)=>{
    const regex = new RegExp(req.body.name,'i')
    Student.find({name:regex}).then(result=>{
        // console.log(typeof({result}))
        res.status(200).json(result)
    })
})

router.post('/sort',(req,res)=>{
    const noArg = parseInt(req.body.noArg)
    
    Student.find().sort({name:noArg}).then(result=>{
        res.status(200).json(result)
    })
})

module.exports = router