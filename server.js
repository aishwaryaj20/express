const express = require('express');
const users = require("./users.json")
const app = express();



app.use(express.json())
app.get("/",function(req,res){
   // const a ={}
   // a.name ="ash"
res.send("Welcome to Homepage")
//return res.send(a)
});

app.get("/users",function(req,res){
    res.send(users)
})


app.post ("", (req,res) =>
{
   const newUser = [...users, req.body]

   res.send(newUser)
})
app.listen(2345,function(){
console.log("listening on port 2345");
})  
