import express from "express";
import { userRoutes } from "../modules/Users/user.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
];

// to match this syntex : router.use("/admin" , adminRoutes)
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
