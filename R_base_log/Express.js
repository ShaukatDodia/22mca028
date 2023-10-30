var express = require('express')
var mongoose = require('mongoose')
var port = 2000

var app = express()

app.use(express.json())
app.use(express.static(__dirname))

mongoose.connect('mongodb://127.0.0.1:27017/MyDatabase')
mongoose.connection.on('connected', () => {
    console.log("connected with MongoDB")
})
mongoose.connection.on('error', (err) => {
    console.log("connected error ", err)
})

const schema = mongoose.Schema({
    EmpID: String,
    EmpName: String,
    Role: String,
    Password: String,
    Email: String,
    Designation: String,
    EmpDept: String,
    EmpSalary: Number
})

const model = mongoose.model('model', schema, "Employee")

app.get('/api/users', (req, res)=>{
    model.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log('data 404')
    })
})


app.post("/api/users", async (req, res)=>{
    await model.create({
        EmpID: req.body.EmpID,
        EmpName: req.body.EmpName,
        Role: req.body.Role,
        Password: req.body.Password,
        Email: req.body.Email,
        Designation: req.body.Designation,
        EmpDept:req.body.EmpDept,
        EmpSalary: req.body.EmpSalary
    }).then((result)=>{
        res.json(result)
    })
})



app.listen(port, ()=>{
    console.log('port listening on', port)
})