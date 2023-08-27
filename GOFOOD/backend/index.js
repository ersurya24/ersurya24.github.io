const express = require('express')
const app = express()
const port = 4000
const mongoDB= require("./db")
mongoDB();
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
  "Access-Control-Allow-Headers",
  "Origin, X-Requested-With,Content-type, Accept"
  );
  next();

})

app.get('/', (req, res) => {
  res.send('Hello World!')
}) 
app.use(express.json())
app.use('/api',require("./Routes/CreatUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));

app.listen(port, () => {
  console.log(` App is listening on port ${port}`)
})



