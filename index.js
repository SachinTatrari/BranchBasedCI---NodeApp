const express = require('express');
const app = express();

app.get('/', (req,res)=>res.send("Hello from Branch Based CI"));
console.log("Started");
module.exports = app;