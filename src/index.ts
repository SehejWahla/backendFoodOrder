import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', async (req:Request, res:Response)=>{
    res.status(200).send({"success" : "ok"})
})

app.listen(3000, ()=>{
    console.log('server started on localhost:3000')
})