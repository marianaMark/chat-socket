console.log("codigo ccccc")
const socket=io();

// DOM elements
let messages=document.getElementById("messages");
let username=document.getElementById("username");
let btn=document.getElementById("send");
let output=document.getElementById("output");
let actions=document.getElementById("actions");

btn.addEventListener("click",function(){
    socket.emit('chat:message',{
        message:message.value,
        username:username.value
    });
});

message.addEventListener("keypress",function(){
    socket.emit('chat:typing',username.value);
});

socket.on('chat:message',function(data){
    // console.log(data);
    actions.innerHTML='';
    output.innerHTML+=`<p><strong>${data.username}</strong>:${data.message}</p>`;
});

socket.on('chat:typing',function(data){
    // console.log(data);
    actions.innerHTML=`<p><em>${data} esta escribiendo</em></p>`;
});