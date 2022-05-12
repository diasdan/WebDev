const express = require("express");
const app = express();

app.get("/", function(req /*recebe dados de uma requisição*/ , res){ 
    res.sendFile(__dirname+"/html/index.html");
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname+"/html/sobre.html");
});

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("<h1>Bem-vindo " + req.params.nome + "<h1>"+"<h2> Sua função é de " + req.params.cargo +".<h2>")
});

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});
