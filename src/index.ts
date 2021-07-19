import express,{Request,Response,Application} from "express"
const app:Application= express()
const port = process.env.PORT || 5000
const sum=(a:number,b:number)=>a+b
app.get("/",(req:Request,res:Response)=>res.send("welcome"))
app.listen(port,()=>console.log("welcome",sum(4,5)))