const userData= require("../models/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const secret="jfdfndjrehnfmdkjfdmkfnk"
    
exports.userSignup=async(req,res)=>{
    
    const {email,password,name,phone,role}=req.body
    console.log(`>>>>>>>>>req.body`,req.body);
    
    const salt=bcrypt.genSaltSync(10)
    const hash=bcrypt.hashSync(password,salt)
    if(!(email && password && name)){
        res.status(400).json({message:"all field are required"})
    }
    const existingUser=await userData.findOne({email})
    if(existingUser){
        res.status(400).json({message:"user already exist"})
    }
    const data={email, password:hash, name,phone,role}
    const newuserdata=new userData(data)
    await newuserdata.save()
    res.status(201).send(newuserdata)
}

exports.userLogin=async(req,res)=>{
    const {email,password}=req.body
    if(!(email && password)){
         return res.status(400).json({message:"all field are required"})
    }
    const existingUser= await userData.findOne({email})
    if(!existingUser){
        return res.status(400).json({message:"user not found"})
    }
    const match=await bcrypt.compare(password,existingUser.password)
    if(!match){
        return res.status(400).json({message:"invalid password"})
    }
    const token=jwt.sign({id:existingUser._id}, secret, {expiresIn:"1h"})

    res.json({token,existingUser})
}

