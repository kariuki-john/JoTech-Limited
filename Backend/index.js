const express = require('express');
const contactUs = require('./routers/contactus.router')
const app = express();
const port = process.env.PORT || 3000

require('dotenv').config();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/api',contactUs)

app.listen(port,()=>{
    console.log('Server started at port',port);
    
})