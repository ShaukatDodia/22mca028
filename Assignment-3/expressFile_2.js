const express = require('express');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const app = express();

app.use(express.json());

data = []

mongoose.connect("mongodb://127.0.0.1:27017/Assignment")
const taskSchema = new Schema({
    name: {
        type: String
    },
    Description:{
        type: String
    }
})

const tasks = mongoose.model("tasks",taskSchema)


  app.get('/api/getData', (req, res) => {
        const result = tasks.find()
        res.send(JSON.stringify(result))
  })
  
    app.get('/',(req, res)=>{
        res.sendFile(__dirname+"/homepage_1.html")
    })

  
  app.listen(4000, () => {
    console.log(`Server is running on http://localhost:${4000}`);
  });