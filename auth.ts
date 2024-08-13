import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "./db";

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
		// Credentials({
		// 	async authorize(credentials) {
		// 		const user = await PrismaAdapter.user.findFirst({
		// 			where: { email: credentials.email },
		// 		});
		// 		if (
		// 			user &&
		// 			bcrypt.compareSync(credentials.password, user.password)
		// 		) {
		// 			return user;
		// 		}
		// 		return null;
		// 	},
		// }),
	],
	session: {
		strategy: "jwt",
	},
});
