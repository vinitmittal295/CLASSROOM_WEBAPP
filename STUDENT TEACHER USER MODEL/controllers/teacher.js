const teacherData=require("../models/teacher")
exports.CreateTeacher=async(req,res)=>{
    const data=req.body
    const {email}=req.body
    const existingTeacher=await teacherData.findOne({email})
    const newteacher=new teacherData(data)
    newteacher.save()
    res.status(200).json(newteacher)

}
exports.getAllTeacher=async(req,res)=>{
    const user=await teacherData.find()
    res.status(200).json(user)
}
exports.getOneTeacher=async(req,res)=>{
    const id=req.params.id
    const user=await teacherData.findById(id)
    res.status(200).json(user)
}
exports.updateTeacher=async(req,res)=>{
    const id=req.params.id
    const data=req.body
    const user=await teacherData.findByIdAndUpdate(id,data)
    res.status(200).json(user)
}
exports.deleteTeacher=async(req,res)=>{
    const id=req.params.id
    const user=await teacherData.findByIdAndDelete(id)
    res.status(200).json(user)
}

