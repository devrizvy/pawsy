import bcrypt from "bcryptjs";
import { prisma } from "../../../lib/prisma";
import config from "../../../config";

const register = async (payload: any) => {
  const hashedPass = await bcrypt.hash(payload.password, 9);
  console.log("hashed", payload.password, { hashedPass });

  const userData = {
    name: payload.user.name,
    email: payload.user.email,
    password: hashedPass,
  };
  console.log(userData);

  const result = await prisma.user.create({
    data: userData,
  });
  return result;
};

const login = async (payload: { email: string; password: string }) => {
  console.log("from Servies", payload);

  const userData = await prisma.user.findFirstOrThrow({
    where: {
      email: payload.email,
    },
  });
  if (!userData) {
    throw new Error("The user dosen't exists ! ");
  }

  const isPasswordCorrect: boolean = await bcrypt.compare(
    payload.password,
    userData.password
  );
  if (!isPasswordCorrect) {
    throw new Error("The password is incorrect !");
  }

  console.log(userData);
};

export const authServices = {
  register,
  login,
};
