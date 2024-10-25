const mongoose=require("mongoose")
const classSchema=new mongoose.Schema(
    {
        batchname:{type:String,require:true},
        timing:{type:String,require:true,unique:true},
        duration:{type:String,require:true},
        subject :{type:String,require:true},
        fee:{type:String,require:true},
        weekoff:{type:String,require:true},
        numofsheet:{type:String,require:true},
    },
    {timestamps:true, versionKey:false}
)
module.exports=mongoose.model("batch",classSchema)