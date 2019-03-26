const path =require('path');

const publicPath=path.join(__dirname,'../public');

const express=require('express');
const app=express();
const port =process.env.port || 3000;

app.listen(port,()=>{
    console.log(`server started @ port ${port}`);
});


app.get('/',(req,res)=>{
    console.log("this is the get api");
    res.send('This is My first Web App');
})