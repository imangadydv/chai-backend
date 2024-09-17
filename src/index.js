import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/indesx.js";
const app = express();
dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running ay port:${process.env.PORT}`)
    })
})
.catch((error)=>{
  console.log("mongodb connection failed",error)
})













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