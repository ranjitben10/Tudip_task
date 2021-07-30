const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Student = mongoose.model("Student")


router.post('/save',(req,res)=>{
    const {name,phoneNumber,email,address} = req.body
    let {city,state,pincode,area,country} = address
    if(!name || !email || !phoneNumber || !address){
        res.status(422).json({error:"Please Fill All the Details!"})
    }
    if(!city || !state || !pincode || !area){
        res.status(422).json({error:"Please Fill All the Details!"})
    }
    Student.findOne({email:email}).then(savedUser=>{
        if(savedUser){
            res.status(422).json({message:"Student Record Already Exists!"})
        }
        if(country == ""){
            country = "India"
        }
        
        const student = new Student({
            name:name[0].toUpperCase()+name.slice(1),
            email,
            phoneNumber,
            address:{
                area,
                pincode,
                city,
                state,
                country,
            },
        })
        student.save().then(user=>{
            res.status(200).json({message:"Student Record Saved Successfully!",user:user})
        }).catch(err=>{
            console.log(err)
        })
    }).catch(err=>{
        console.log(err)
    })

})

router.get("/fetch",(req,res)=>{
    Student.find().then(results=>{
        res.status(200).json({results})
    }).catch(err=>{
        console.log(err)
    })
})



module.exports = router