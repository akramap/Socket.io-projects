// import expressjs from express module
const express = require("express");
const app = express();
// create server by importing from http module for app(express()).
const   server =require("http").createServer(app) ;
// use socket io module's listen method by importing from socket.io module.
const io=require("socket.io").listen(server) ;

// create arrays 
users=[];
// create arrays for storing the socket connection.
connections=[];

server.listen(process.env.PORT || 3000);

console.log(`server started running on port 3000`);

// create route for get().
app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/index.html` )
})

// create socket connections
io.sockets.on('connection',(socket)=>{
    connections.push(socket);
    console.log(`Connected: %s sockets connected, ${connections.length}`);

    // disconnect
    socket.on('disconnect',(data)=>{

        users.splice(users.indexOf(socket.username),1);

        updateUsernames();
        connections.splice(connections.indexOf(socket),1);
        console.log(`Disconnected: %s sockets connected, ${connections.length}`); 
    });
 // send message
 socket.on('send message',(data)=>{
     console.log("data",data);
   io.sockets.emit('new message',{msg:data,user:socket.username});
});

 // new users
 socket.on('new user',(data,callback)=>{
     callback(true);
    console.log("user",data);
    socket.username=data;
    users.push(socket.username);
    updateUsernames();
});

function updateUsernames(){
    io.sockets.emit(`get users ${users}`);
};
});


