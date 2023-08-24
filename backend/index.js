const express = require('express')
const app = express();
const mongoose=require('mongoose');
const port = 5000;


const connectToMongo = require("./db")
connectToMongo()
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
app.use('/api',require("./routes/CreateUser"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})