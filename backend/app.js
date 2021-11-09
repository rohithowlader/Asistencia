const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'})
const DB=process.env.DATABASE;

mongoose.connect(DB).then(()=> {
    console.log("Connection Successful");
}).catch((err)=> console.log("Connection Unsuccessful"))


//Middleware
const middleware=(req,res,next) => {
    console.log("Hello my middleware");
    next();
}



app.get('/',(req, res)=>{
    res.send(`Hello from home`)
});
app.get('/about',middleware,(req, res)=>{
    res.send(`Hello from about`)
});
app.get('/contact',(req, res)=>{
    res.send(`Hello from contact`)
});
app.get('/signin',(req, res)=>{
    res.send(`Hello from signin`)
});
app.get('/signup',(req, res)=>{
    res.send(`Hello from signup`)
});
app.listen(3000,()=>{
    console.log('Backend server is running')
})