const express= require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const exp = require("constants");


const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set ('view engine',"ejs");




app.listen(3000,function(){
    console.log("Server started on port 3000 !!!");
})