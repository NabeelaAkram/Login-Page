const express=require("express")
const cors=require("cors")
const app=express()
app.use(cors())
var username="nabee"
var password=123
app.use(express.json())
app.post("/login",function(req,res){
    console.log(req)
    if(req.body.username==username && req.body.password==password)
   {
    console.log(req.body.username)
    res.send(true)
}
    else{
        res.send(false)
    }
})
app.listen(5001,function(req,res){
    console.log("server started")
})