
const express = require("express");
const router = express.Router();
const registertemplatecopy=require("../models/User")
const sessionCopy=require("../models/Session")
// const nodemailer = require("nodemailer");

router.post("/createSession", async (req,res)=>{
    const session = new sessionCopy({
        user: req.body.userId,
    });
    await session.save().then(async (data)=>{
        await registertemplatecopy.findOneAndUpdate({_id:req.body.userId} ,{ $push: { sessions: data._id } },) 
    })   
    res.status(201).json("done")
})


module.exports = router;