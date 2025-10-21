const express=require("express")
const app =express();
// console.log(express.json()); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
console.log("hello")



app.post("/add",(req,res)=>{
    res.json(req.body);w
});

const port = 3000;
app.listen(port, ()=>{
    console.log("server started" + port)
})