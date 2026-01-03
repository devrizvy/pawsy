import app from "./app";

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`The PAWSY is running on port ☛  ${port}`);
});
