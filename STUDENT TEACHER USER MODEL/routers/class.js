const express=require("express")
const router=express.Router()
const VerifyAuth=require("../middleware/VerifyAuth")

const classController=require("../controllers/class")
router.post("/post",VerifyAuth,classController.createClass)
router.get("/getall",VerifyAuth,classController.getAllClass)
router.get("/:id",VerifyAuth,classController.getOneClass)
router.patch("/updateone/:id",VerifyAuth,classController.updateClass)
router.delete("/:id",VerifyAuth,classController.deleteClass)

module.exports=router   