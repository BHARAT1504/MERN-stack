const express = require("express");
const path=require("path");
const bodyParser=require("body-parser")
const router=require("./UserRoutes")

const app=express();
const port=4000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use("/api/v1",router);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
    // res.json({
    //     name:"bharat",
    //     email:"sample@gmail.com",
    //     password:"hexed",
    // });
   

});

// app.post("/api/v1/register",);

app.post("/api/v1/about",(req,res)=>{
    res.send("<h1>About Page</h1>");
});
// app.get("/contact",(req,res)=>{
//     res.send("<h1>Contact Page</h1>");
// });

// app.post("/api/v1/register",(req,res)=>{
//     res.send(`<h1>DONE Mr.${req.body.name}</h1> <h2>your email is ${req.body.email}</h2>  <h3>your password is ${
//         req.body.password}</h3>`);
//      console.log(req.body);
// })

 app.listen(port,()=>{
     console.log(`Server is working on port: ${port}`);

});

// RESt Representational state transfer is an API that defines a set of function the http programmers 
//can use to send requests and recive responses using the HTTP protocol methods such as GET and POST .

//get read
//post create
//put update
//delete delete