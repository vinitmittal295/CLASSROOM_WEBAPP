const mongoose=require("mongoose")
const studentSchema=new mongoose.Schema(
    {
        name:{type:String,require:true},
        email:{type:String,require:true,unique:true},
        phone:{type:String,require:true},
        role:{type:String,require:true},
        address:{type:String,require:true},

        qualification:{type:String,require:true},
        fee:{type:String,require:true},
        gender:{type:String,require:true},
        rollno:{type:String,require:true},
        batchname:{type:mongoose.Schema.Types.ObjectId,
            ref:"class"
            },
        joindate:{type:Date,require:true},

        

    },
    {timestamps:true, versionKey:false}
)
module.exports=mongoose.model("student",studentSchema)