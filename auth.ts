import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "./db";
import { saltAndHashPassword } from "./utils/helper";
import { getUserByEmail } from "./actions/auth.action";

export const {
	handlers: { GET, POST },
	signIn,
	signOut,
	auth,
} = NextAuth({
	adapter: PrismaAdapter(db),
	providers: [
		Github({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		Credentials({
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "email",
				},
				password: { label: "Password", type: "password" },
			},
			authorize: async (credentials) => {
				if (
					!credentials ||
					!credentials.email ||
					!credentials.password
				) {
					return null;
				}

				const email = credentials.email as string;

				const user = await getUserByEmail(email);

				if (!user) {
					throw new Error("No user found.");
				}

				const isMatch = bcrypt.compareSync(
					credentials.password as string,
					user?.password as string
				);

				if (!isMatch) {
					throw new Error("Incorrect password");
				}

				return user;
			},
		}),
	],
	session: {
		strategy: "jwt",
	},
});
