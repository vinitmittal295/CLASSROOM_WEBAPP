const express =require("express")
const mongoose=require("mongoose")

const app =express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const cors=require("cors")
app.use(cors())

const mongo_url="mongodb+srv://vinitmittal295:1234@cluster0.yohx5ud.mongodb.net/classroom"

mongoose.connect(mongo_url).then(()=>{
    console.log("databse connected")
})
.catch((error)=>{
    console.log(error)
})

// student Routes
const studentRoutes=require("./routers/student")
app.use("/students",studentRoutes)

// teacher Routes
const teacherRoutes=require("./routers/teacher")
app.use("/teachers",teacherRoutes)

// class Routes

const classRoutes=require("./routers/class")
app.use("/class",classRoutes)

// user Routes
const userRoutes=require("./routers/user")
app.use("/user",userRoutes)
const port =3005
app.listen(port,()=>{
    console.log(`server on ${port}`)
})