const express=require("express");

const app=express();

app.get("/",function(req,res){
    //console.log(request)
    res.send("<h1>hello wolrd</h1>");
});

app.get("/contact",function(req,res){
    res.send("Contact me at:kbchoudhary143@gmail.com");

});
app.get("/about",function(req,res){
    res.send("about me");

});

app.get("/hobbies",function(req,res){
    res.send("<ul><li>coffee</li><li>movies</li><li>code</li></ul>");

});

app.listen(3000,function(){
    console.log("server started on port 3000");
});

//request response
