const express=require("express")
const router=express.Router()
const teachercontrollers=require("../controllers/teacher")
const VerifyAuth=require("../middleware/VerifyAuth")
// const VerifyAuth=require("../middleware/VerifyAuth")
router.post("/post",VerifyAuth,teachercontrollers.CreateTeacher)
router.get("/get",VerifyAuth,teachercontrollers.getAllTeacher)
router.get("/:id",VerifyAuth,teachercontrollers.getOneTeacher)
router.patch("/:id",VerifyAuth,teachercontrollers.updateTeacher)
router.delete("/:id",VerifyAuth,teachercontrollers.deleteTeacher)
module.exports=router