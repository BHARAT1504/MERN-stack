const mongoose=require("mongoose");
const { boolean } = require("webidl-conversions");

mongoose.connect("mongodb://localhost:27017/Sample",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connected to mongoDB succesfully");
}).catch((err)=>{
    console.log(err)
})


//making schema model
const student=new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number
})

const Student=new mongoose.model("Student",student);



const adder=async()=>{
    const ss = await Student.find({height:{$in:[5,6]}})

    //eq operator gt greater
    //create({name:"bharat",workout:false,height:5});
    //   {  name:"Bharat",
    //     workout:true,
    //     height:6
    // })
   console.log(ss)
}
    adder();