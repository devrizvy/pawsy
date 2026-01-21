import express, {
	type Application,
	type NextFunction,
	type Request,
	type Response,
} from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./app/routes";
import status from "http-status";
import { success } from "zod";
import { globalErrorHandler } from "./app/middlewares/globarErrorHandler";
import auth from "./app/middlewares/auth";
const app: Application = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", auth(), router);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.send({
		Message: "Pawsy's server is running ! ",
	});
});

app.use(globalErrorHandler);

export default app;
