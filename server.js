

const express = require('express');
const port = process.env.PORT || 5000;



const app = express();

app.get('/', async (req,res)=>{
res.send('hello word')
});

app.listen(port, ()=>{
  console.log('server started at 5000');
});




