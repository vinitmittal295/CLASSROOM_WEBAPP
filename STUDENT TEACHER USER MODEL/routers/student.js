const express=require("express")
const router=express.Router()
const studentcontrollers=require("../controllers/student")
const VerifyAuth = require("../middleware/VerifyAuth")
// const VerifyAuth=require("../middleware/VerifyAuth")

router.post("/post",VerifyAuth,studentcontrollers.CreateStudent)
router.get("/get",VerifyAuth, studentcontrollers.getAllstudent)
router.get("/:id",VerifyAuth, studentcontrollers.getOneStudent)
router.patch("/:id",VerifyAuth, studentcontrollers.updateonestudent)
router.delete("/:id",VerifyAuth, studentcontrollers.deleteStudent)


module.exports=router