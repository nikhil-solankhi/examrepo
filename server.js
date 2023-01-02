const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.sendFile('/course.html',{root:__dirname});
});
app.listen(3000,()=>{
    console.log('server running on port 3000');
});