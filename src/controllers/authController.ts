import prisma from "../utils/Prisma";
import { Request, Response } from "express";
// import { genSalt, hash, compare } from "bcrypt-ts";
import bcrypt from "bcrypt";
import { generateJWT } from "./GlobalControllers";

const signupUser = async (req: Request, res: Response): Promise<void> => {
  // 1. Check if user exists
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);
  const userCheck = await prisma.user.findUnique({
    where: { email: email },
  });
  if (userCheck != null) {
    res.status(401).send({ data: "Not allowed. Email already in use" });
    return;
  }

  // 2. If user doesnt exist create
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      hashedPassword: passwordHash,
    },
  });

  // 3. Return created user token to client
  res.status(200).send({ token: await generateJWT(email) });
  return;
};

export default {
  signupUser,
};
