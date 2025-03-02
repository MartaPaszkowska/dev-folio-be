import "dotenv/config";
import app from "./app.js";

(async () => {
	const PORT = process.env.PORT || 4000;
	app.listen(PORT, () => {
		console.log(`Server running. Use our API on port: ${PORT}`);
	});
})();
