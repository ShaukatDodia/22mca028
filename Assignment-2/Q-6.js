const app = require("http")
const message = require("./localModule_6")
const server = app.createServer(function(req, res){
    if(req.url=="/"){
        res.end(message())
    }
    
   
})

server.listen(4000, function(){
    console.log("Server Running On Port Number:"+4000);
})