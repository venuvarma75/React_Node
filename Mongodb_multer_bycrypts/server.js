const express= require("express")
const app= express();

const bcrypt=require("bcryptjs")

// const str ="good everyone"
// console.log(bcrypt.hashSync(str,10))

const password="hello everyone@1234";
// const saltRounds =10;
//  bcrypt.hash(password,saltRounds,function(err,hash){
//     console.log("hashed passwword:",hash)
//  })
  console.log(bcrypt.hashSync(password,12));

app.listen(3000,()=>{
    console.log("server is running on 3000")
})