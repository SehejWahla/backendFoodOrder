import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import pg from 'pg'
const { Pool } = pg
 
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,     
  password: process.env.DB_PASSWORD
})


const app = express()
app.use(express.json())
app.use(cors())




app.get('/', async (req:Request, res:Response)=>{
    res.status(200).send({"success" : "ok"})
})

app.listen(3000, async ()=>{
    console.log('server started on localhost:3000')
})