const classData = require('../models/class')

exports.createClass=async(req,res)=>{
    console.log(`>>>>>>>>>req>>>`,req.body);
    
    const data=req.body
    console.log(`>>>>>>>>>data>>>`,data);
    
    // const {batchname}=req.body
    // const existingClass= await classData.findOne({batchname})
    const newclassData=new classData(data)
    newclassData.save()
    res.status(200).json(newclassData)

}
exports.getAllClass=async(req,res)=>{
    // const id=req.params.id
    const user=await classData.find()
    res.status(200).json(user)
}

exports.getOneClass=async(req,res)=>{
    const _id =req.params.id
    console.log(`>>>>>>>>>24id>>>`,_id);
    
    const user=await classData.findById(_id)
    console.log(`>>>>>>>>>user>>>`,user);
    
    if(!user){
        return res.status(400).json({message:"user not found"})
    }

    res.status(200).json(user)
}

exports.updateClass=async(req,res)=>{
    const id=req.params.id
    const data=req.body
    const user=await classData.findByIdAndUpdate(id,data)
    res.status(200).json(user)
}
exports.deleteClass=async(req,res)=>{
    const id=req.params.id
    const user=await classData.findByIdAndDelete(id)
    res.status(200).json(user)
}