const express=require("express")
const mongoose=require("mongoose")
const app=express()
mongoose.connect("mongodb://127.0.0.1:27017/kl",{
    useNewUrlParser:true,useUnifiedTopology:true
},)
.then(()=>console.log('connected suceesfully'))
.catch((err)=> {console.log(err)});
app.listen(3000,()=>{
    console.log("conn port")
})