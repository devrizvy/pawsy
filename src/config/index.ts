import dotenv from "dotenv";
import path from "node:path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
	port: process.env.PORT,
	salt: process.env.SALT,
	jwt: {
		jwt_secret: process.env.JWT_SECRET,
		refresh_token_secrect: process.env.REFRESH_TOKEN_SECRET,
		jwt_access_token_expires_in: process.env.ACCESS_TOKEN_EXPIRES_IN,
		refresh_token_expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN,
	},
};
