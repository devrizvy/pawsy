import type { NextFunction, Request, Response } from "express";
import { jwtHelper } from "../../helper/jwtHelper";
import config from "../../config";
import type { Secret } from "jsonwebtoken";

const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new Error("You are not authorized gng !");
      }
      const varifyUser = jwtHelper.verifyToken(
        token,
        config.jwt.jwt_secret as Secret
      );
      if (!varifyUser) {
        throw new Error("FORBBIDEN");
      } else {
        next();
      }
    } catch (err) {
      next(err);
    }
  };
};

export default auth;
