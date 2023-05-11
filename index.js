// 1.importing express
const express =require("express");
const res = require("express/lib/response");

//2.initialising
const app = new express()
app.use(express.urlencoded({extended:true}));
app.use(express.json());

    //3.Api creation
app.get('/',(req,res)=>{
    res.json("Hello Welcome To Backend")
})
app.post('/signup',(req,res)=>{
    res.send(`${req.body.name+" "+req.body.age}`);
})

//4.setting port
app.listen(3005,()=>{
    console.log("port 3005 is running");
})

