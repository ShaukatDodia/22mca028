const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/TabletStore") 
var conn = mongoose.connection 
conn.on('connected',function(){ 
 console.log("Connected to mongoDB") 
})

const tabletSchema = new mongoose.Schema({
    "tabletId":String,
    "Tname":String,
    "Tbrand":String,
    "Tprice":Number,
    "Tprocessor":String,
    "Tstorage":String,
    "Timage":String,
    "Tquantity":Number
})

const tablet = mongoose.model("tablet",tabletSchema, "Tablet")

app.use(express.static(__dirname))
app.use(express.json())

app.get("/",(req, res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get("/api/tablet",async (req,res)=>{
     await tablet.find().then((result)=>{
        res.json(result)
    })
})

app.delete("/api/tablet/:id",async (req,res)=>{
    const id = req.params.id;
    await tablet.deleteOne({tabletId: id}).then((result)=>{
       res.json(result)
   })
})

app.post("/api/tablet", async (req, res)=>{
    await tablet.create({
        tabletId: req.body.tabletId,
        Tname: req.body.Tname,
        Tprice: req.body.Tprice,
        Tprocessor: req.body.Tprocessor,
        Timage: req.body.Timage,
        Tstorage: req.body.Tstorage,
        Tquantity: req.body.Tquantity
    }).then((result)=>{
        res.json(result)
    })
})


app.put("/api/tablet", async function(req, res){
    await tablet.updateOne({"tabletId":req.body.tabletId}, 
    {$set: {
       
        "Tname": req.body.Tname,
        "Tprice": req.body.Tprice,
        "Tprocessor": req.body.Tprocessor,
        "Timage": req.body.Timage,
        "Tstorage": req.body.Tstorage,
        "Tquantity": req.body.Tquantity
    }}
    ).then((result)=>{
        res.json(result)
    })
})

app.listen(2000,function(){
    console.log("Server Runnig!");
})