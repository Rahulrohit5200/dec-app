const path=require('path');
const express=require('express');
const app=express();
const publicpath=path.join(__dirname,"..",'public');
app.use(express.static(publicpath));
app.get('*',(req,res)=>{
    res.sendFile(path.join(publicpath,'index.html'))
})
const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log("server running!");
})