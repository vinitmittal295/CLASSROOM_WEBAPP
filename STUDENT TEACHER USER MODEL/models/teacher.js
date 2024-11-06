const mongoose=require("mongoose")
const teacherSchema=new mongoose.Schema(
    {
        name:{type:String,require:true},
        email:{type:String,require:true,unique:true},
        qualifiacation:{type:String,require:true},
        salary:{type:String,require:true},
        batchName:{type:mongoose.Schema.Types.ObjectId,
            ref:"batch"},
        experience:{type:String,require:true},
        phone:{type:String,require:true},
        role:{type:String,require:true},
        joinDate:{type:String,require:true},
        employeeId:{type:String,require:true},

    },
    {timestamps:true, versionKey:false}

)

module.exports=mongoose.model("teacher",teacherSchema)