import mongoose from "mongoose";
require("dotenv").config();

const configOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const connectToDB = async () => {
	const connectionURL = `mongodb+srv://sunnyparkk:ZQX_kpq4wvn4wbp.kfd@cluster0.vt2hpol.mongodb.net/`;

	mongoose
		.connect(connectionURL, configOptions)
		.then(() => console.log * "Connected to DB")
		.catch((err) => console.log("Getting Error from DB connection ", err.message));
};

export default connectToDB;
