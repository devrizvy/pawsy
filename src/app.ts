import express, { type Application, type NextFunction, type Request, type Response } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app : Application = express()
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended : true})); 

app.get("/" , (req : Request , res : Response , next : NextFunction) => {
    res.send({
        Message : "Pawsy's server is running ! "
    })
})






export default app; 