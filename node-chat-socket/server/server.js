const path =require('path');
const express=require('express');
// for creating the server
const http = require('http');
// communication between client and server
const socketIO=require('socket.io');

const publicPath=path.join(__dirname,'../public');

const app=express();
const port =process.env.port || 3000;

const server=http.createServer(app);
const io=socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log(`New User Connected`);


socket.on('disconnect',()=>{
    console.log('disconnected To the Server');
})


socket.on('connect',()=>{
    console.log('Connected To the Server');
})

})

server.listen(port,()=>{
    console.log(`server started @ port ${port}`);
});



app.get('/',(req,res)=>{
    console.log("this is the get api");
    res.send('This is My first Web App');
})