const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../db/schema/user');

const key = process.env.TOKEN_KEY

router.post('/register',async(req, res, next) => {
    try{
        const check = await User.findOne({email: req.body.email})
        if(check){
            return res.status(200).json({success: true, msg: "Already account exist"})
        }
    const userData = req.body
    const password = req.body.password
    delete userData.password
    console.log(userData)
     bcrypt.hash(password, 10, async (err, hash) => {
        if(err){
            return res.status(500).json({success: false, msg: err})
        }
        let result = new User({...userData,password:hash})
        result = await result.save()
        res.status(200).json({success: true, msg: "Account Creating Successfully", Data: result})
     })
    
    }
    catch(err){
        return res.status(500).json({success: false, msg: err})
    }
    
})

router.post('/login',async(req, res, next) => {
    try {
         let user = await User.find({email: req.body.email})
         console.log(user[0])
         if(user.length < 1){
            res.status(200).json({success:true, msg:"User Does Not Exist"})
         }
         else{
            bcrypt.compare(req.body.password, user[0].password, (err, result) =>{
                // if(err){
                //     return res.status(500).json({success: false, msg: err})
                // }
                if(!result){
                    res.status(200).json({success: true, msg:"Password Not Matched"})
                }
                if(result){
                    delete user[0].password
                    delete user[0].otp
                    let token = jwt.sign({
                        firstName: user[0].firstName,
                        lastName: user[0].lastName,
                        email: user[0].email,
                        userType: user[0].userType
                    },
                    key,
                    {
                      expiresIn: "12h"
                    });
                    token = 'bareer ' + token;
                    let result = {...user[0], token: token}
                    res.status(200).json({success:true, msg:"Password Matched", result:{_id:user[0]._id, firstName: user[0].firstName,
                        lastName: user[0].lastName,
                        email: user[0].email,
                        userType: user[0].userType,
                        
                    },token: token});
                }
            })
         }
    } catch (err) {
        res.status(500).json({success: false, msg: err})
    }
})

module.exports = router