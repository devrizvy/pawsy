import app from "./app";
import config from "./config";


app.listen(config.port, () => {
	console.log(`The PAWSY is running on port ☛  ${config.port}`);
});
