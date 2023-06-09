const express = require("express");


const router = express.Router();
const registerUser=require("./UserController");
router.route("/register").post(registerUser);
router.route("/login").get(registerUser);
 //.get((req,res)=>{
//     res.send("wow");
// });
//router.route("/api/v1/register").get(registerUser);

module.exports=router;