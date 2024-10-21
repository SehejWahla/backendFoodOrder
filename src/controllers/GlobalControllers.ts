import jwt from "jsonwebtoken";
import prisma from "../utils/Prisma";

export const generateJWT = async (email: string): Promise<string> => {
  const jwtKey = process.env.JWT_KEY;

  console.log(email);

  if (!jwtKey) {
    throw new Error("JWT_KEY is not defined in environment variables");
  }

  const data = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!data) {
    return "";
  }

  console.log(data);

  return jwt.sign(data, jwtKey);
};
