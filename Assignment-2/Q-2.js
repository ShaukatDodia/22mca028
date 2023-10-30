const app = require("http")

const server = app.createServer(function(req, res){
    if(req.url=="/"){
        res.end("Welcome to Node JS Application!")
    }
})

server.listen(4000, function(){
    console.log("Server Running On Port Number:"+4000);
})