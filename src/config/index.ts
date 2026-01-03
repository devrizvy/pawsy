import dotenv from "dotenv"
import path from "node:path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
    port : process.env.PORT ,
    salt : process.env.SALT,
    jwt : {
        jwt_secrect : process.env.JWT_SECRET
    }

}