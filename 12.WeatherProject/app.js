const express = require("express");
const https = require("https");
const app=express();

app.get("/",function(req,res){

 https.get( )


    res.send("server is up and running.")
});




app.listen(3000,function(){
    console.log("server is runing on port 3000. ")
});