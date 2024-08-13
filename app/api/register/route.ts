import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { saltAndHashPassword } from "@/utils/helper";
import { db } from "@/db";
import { getUserByEmail } from "@/actions/auth.action";

export async function POST(request: Request) {
	const body = await request.json();
	const { name, email, password } = body;

	let user = await getUserByEmail(email);

	if (user) {
		return NextResponse.json({
			user,
			error: "User already exists!",
			status: 400,
		});
	}

	const hashedPassword = saltAndHashPassword(password);

	const newUser = await db.user.create({
		data: {
			email,
			name,
			password: hashedPassword,
		},
	});

	return NextResponse.json(newUser);
}
