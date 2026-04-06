import express from "express"

const router=express.Router();
import cloudinary from "../Config/cloudnary";
import multer from "multer";
const upload=multer({dest:"uploads/"});

router.post('/product', upload.single("product_image"),async(req,res)=>{
const result=await cloudinary.uploader.upload(req.file.path);

res.json({url:result.secure_url});
});
router.post('/',()=>{});
router.post('/',()=>{});
export default router