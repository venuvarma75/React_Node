const express = require("express")
const app =express();
require("dotenv").config()

const nodemailer = require("nodemailer");

app.use(express.urlencoded());
app.use(express.json())

const transporter = nodemailer.createTransport({
    service:"gmail",
auth:{
    user:process.env.nodemailer_user,
    pass:process.env.nodemailer_pass,
},
})

const mailOptions ={
    from:process.env.nodemailer_user,
    to:"venuvarma75@gmail.com",
    subject:"hello good evening",
    text:"this is 10000 coders"
};

transporter.sendMail(mailOptions,(err,info)=>{
    if (err){
        console.log(err)
    } else {
        console.log("mail send successfully");
    }
});

app.post("/sendMail",(req,res)=>{
    if (req.body.email){
        res.send("mail sent" + req.body.email);
    } else {
        res.status.send("no email found")
    }
    res.send("mail sent");
});


app.listen(process.env.portno,()=>{
    console.log("server is running")
})

