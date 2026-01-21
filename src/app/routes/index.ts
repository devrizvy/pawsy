import express from "express";
import { userRoutes } from "../modules/Users/user.route";
import { authRoutes } from "../modules/Auth/auth.route";
import { petRoutes } from "../modules/Pet/pet.route";
import { adoptionRoutes } from "../modules/Adoption/petAdoption.route";

const router = express.Router();

const moduleRoutes = [
	{
		path: "/",
		route: authRoutes,
	},
	{
		path: "/user",
		route: userRoutes,
	},
	{
		path: "/pets",
		route: petRoutes,
	},
	{
		path: "/adoption-request",
		route: adoptionRoutes,
	},
];

// to match this syntex : router.use("/admin" , adminRoutes)
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
