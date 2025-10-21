const express =require("express")
const  app =express();

const weatherRoute= require("./routes/weatherRoute.js");
const {errorMiddleware}=require("./middlewares/errorMiddleware.js")
 
app.use("/api/v1.0/weather",weatherRoute)
app.use(errorMiddleware);

// app.get("/",(req,res)=>{
//     res.send("hello good morning")
// })

app.listen(3000,()=>{
    console.log("server runnung at port 3000")
});
