import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import pg from "pg";
import { jwtDecode } from "jwt-decode";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/", async (req: Request, res: Response) => {
  console.log(req.body);
  console.log(jwtDecode(req.body.credentials));
  res.status(200).send({ success: "ok" });
});

app.listen(3000, async () => {
  console.log("server started on localhost:3000");
});
