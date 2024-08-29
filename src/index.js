import dotenv from "dotenv"

import connectDB from "./db/indesx.js";
dotenv.config({
    path:'./env'
})

connectDB()













// import express from"express"
// const app = express();
// (async()=>{
//   try{
//    await mongose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//    app.on("error",(error)=>{
//     console.log("ERROR:",error);
//     throw error;
//    });  
//    app.listen(process.env.PORT,()=>{
//     console.log("App is listening on port 8000")
//    })
// }
//   catch(error){
//     console.log("ERROR:",error)
//     throw error;
// }
// })();