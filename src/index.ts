import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import pg from "pg";
import { jwtDecode } from "jwt-decode";
import { PrismaClient } from "@prisma/client";
import authRoute from "./routes/authRoute";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth/", authRoute);

app.post("/", async (req: Request, res: Response) => {
  res.status(200).send({ data: "success" });
});

app.listen(3000, async () => {
  console.log("server started on localhost:3000");
});
