const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname+"/html/index.html");
})

app.listem(8081, function(){
    console.log("Rodando servidor local");
})
