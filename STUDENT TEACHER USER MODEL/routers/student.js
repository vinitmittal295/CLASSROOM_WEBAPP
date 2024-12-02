const express=require("express")
const router=express.Router()
const studentcontrollers=require("../controllers/student")
// const VerifyAuth = require("../middleware/VerifyAuth")
// const VerifyAuth=require("../middleware/VerifyAuth")

router.post("/post",studentcontrollers.CreateStudent)
router.get("/get", studentcontrollers.getAllstudent)
router.get("/:id", studentcontrollers.getOneStudent)
router.patch("/:id", studentcontrollers.updateonestudent)
router.delete("/:id", studentcontrollers.deleteStudent)


module.exports=router