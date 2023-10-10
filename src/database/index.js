import mongoose from "mongoose";
require("dotenv").config();

const configOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const connectToDB = async () => {
	mongoose
		.connect(process.env.MONGO_URI, configOptions)
		.then(() => console.log * "Connected to DB")
		.catch((err) => console.log("Getting Error from DB connection ", err.message));
};

export default connectToDB;
