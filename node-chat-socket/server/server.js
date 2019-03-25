const path =require('path');

const publicPath=path.join(__dirname,'../public');

const express=require('express');
const app=express();

app.listen(3000,()=>{
    console.log("server started @ port 3000");
});


app.get('/',(req,res)=>{
    console.log("this is the get api");
    res.send('got it');
})