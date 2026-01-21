import type { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelper } from "../../../helper/jwtHelper";
import type { TUser } from "../../interface/user";
import { prisma } from "../../../lib/prisma";
import { email } from "zod/v4/core/regexes.d.cts";

const getUsers = async (payload: string) => {
  console.log(payload);
};

const getMe = async (token: string) => {
  console.log(": ---> ", token);
  const decoded = jwtHelper.verifyToken(
    token,
    config.jwt.jwt_secret as Secret,
  ) as TUser;
  if (!decoded) {
    throw new Error("FORBBIDEN");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: decoded.id,
    },
  });
  console.log("Found : ---> ", user);

  return {
    name: user?.name,
    email: user?.email,
  };
};

const userInfoUpdate = async (token: string, payload: any) => {
  const user = jwtHelper.verifyToken(
    token,
    config.jwt.jwt_secret as Secret,
  ) as TUser;
  if (!user) {
    throw new Error("FORBBIDEN");
  }
  console.log(": ---> ", user);

  const result = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: payload,
  });
  return {
    name: result.name,
    email: result.email,
  };
};

export const userServices = {
  getUsers,
  getMe,
  userInfoUpdate,
};
