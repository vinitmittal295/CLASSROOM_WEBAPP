const Studentdata=require("../models/student")

exports.CreateStudent=async(req,res)=>{
    const data=req.body
    // const id=req.body.id
    const {email}=req.body
    const existinstudent=await Studentdata.findOne({email})
    const student=new Studentdata(data)
    student.save()
    res.status(200).json(student)

}
exports.getAllstudent=async(req,res)=>{
    const user=await Studentdata.find()
    res.status(200).json(user)
}
exports.getOneStudent=async(req,res)=>{
    const id=req.params.id
    const user=await Studentdata.findById(id)
    res.status(200).json(user)
}
exports.updateonestudent=async(req,res)=>{
    const id=req.params.id
    const data=req.body
    const user=await Studentdata.findByIdAndUpdate(id,data)
    res.status(200).json(user)
}
exports.deleteStudent=async(req,res)=>{
    const id=req.params.id
    const user=await Studentdata.findByIdAndDelete(id)
    res.status(200).json(user)
}
