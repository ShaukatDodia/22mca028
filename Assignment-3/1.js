const express = require('express');
const app = express();

app.use(express.json());

data = [
    {pID: "1",pName:"Car",pCategory:"Vehicle",pDesc:"This is a Car",price:100000},
    {pID: "2",pName:"Bike",pCategory:"Vehicle",pDesc:"This is a Bike",price:80000},
    {pID: "3",pName:"Fridge",pCategory:"Home Appliances",pDesc:"This is a Fridge",price:65000},
    {pID: "4",pName:"RCB Bus",pCategory:"Vehicle",pDesc:"This is a Emotions",price:7000},
]


  app.get('/api/getData', (req, res) => {
    res.json(data);
  });
  
app.get('/',(req, res)=>{
  res.sendFile(__dirname+"/homepage_1.html")
})
  app.post('/addData', (req, res) => {
    data.push({pID: req.body.pID, pName: req.body.pName, pCategory: req.body.pCategory, pDesc: req.body.pDesc, price: req.body.price})
    res.json(data)
  });
  
  app.put('/update/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    
  });
  
  app.delete('/delete/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const record = data(a=>a.pID==id)
    data.remove(record)

    res.json(data)
  });
  
  app.listen(4000, () => {
    console.log(`Server is running on http://localhost:${4000}`);
  });