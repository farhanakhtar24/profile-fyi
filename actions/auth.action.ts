"use server";

import { signIn, signOut } from "@/auth";
import { db } from "@/db";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";

export const getUserByEmail = async (email: string) => {
	try {
		const user = await db.user.findUnique({
			where: {
				email,
			},
		});
		return user;
	} catch (error) {
		// console.log(error);
		return null;
	}
};

export const login = async (provider: string) => {
	await signIn(provider, { redirectTo: "/middleware" });
	revalidatePath("/");
};

export const logout = async () => {
	await signOut({
		redirectTo: "/",
	});
	revalidatePath("/");
};

export const loginWithCreds = async (email: string, password: string) => {
	const existingUser = await getUserByEmail(email);
	console.log(existingUser);

	if (!existingUser) {
		return { error: "User does not exist!" };
	}

	try {
		await signIn("credentials", {
			email,
			password,
			redirectTo: "/middleware",
		});
	} catch (error: any) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return { error: "Invalid credentials!" };
				default:
					return { error: "Something went wrong!" };
			}
		}

		throw error;
	}

	revalidatePath("/");
};
