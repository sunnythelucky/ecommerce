import connectToDB from "@/database";
import { jwt } from "jsonwebtoken";
import { NextResponse } from "next/server";

const schema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
	await connectToDB();

	const { email, password } = await req.body;

	const { error } = schema.validate({ email, password });

	if (error) {
		return NextResponse.json({
			success: false,
			message: error.details[0].message,
		});
	}

	try {
		//check if the user is exists or not
		const checkUser = await User.findOne({ email });
		if (!checkUser) {
			return NextResponse.json({
				success: false,
				message: "Account not found with this email.",
			});
		}

		const checkPassword = await compare(password, checkUser.password);
		if (!checkPassword) {
			return NextResponse.json({
				success: false,
				message: "Incorrect Password, please try again",
			});
		}

		const token = jwt.sign(
			{
				id: checkUser?._id,
				email: checkUser?.email,
				role: checkUser?.role,
			},
			"default_secret_key",
			{ expiresIn: "1d" }
		);

		const finalData = {
			token,
			user: {
				id: checkUser?._id,
				name: checkUser?.name,
				email: checkUser?.email,
				role: checkUser?.role,
			},
		};

		return NextResponse.json({
			success: true,
			message: "Logged in successfully.",
			data: finalData,
		});
	} catch (error) {
		console.log("Error while logging in. Please try again");

		return NextResponse.json({
			success: false,
			message: "Something went wrong ! Please try again later",
		});
	}
}
