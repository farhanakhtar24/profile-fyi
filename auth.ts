import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "./db";
import { getUserByEmail } from "./actions/get/getUserByEmail.action";

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
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const email = credentials.email as string;

        const user = await getUserByEmail(email);

        if (!user) {
          throw new Error("No user found.");
        }

        const isMatch = bcrypt.compareSync(
          credentials.password as string,
          user?.password as string,
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
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user && token?.sub) {
        session.user.id = token.sub; // token.uid or token.sub both work
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.sub = user.id; // token.uid or token.sub both work
      }
      return token;
    },
  },
  events: {
    createUser: async ({ user }) => {
      if (!user.id) {
        return;
      }

      await db.cart.create({
        data: {
          userId: user.id,
        },
      });
    },
  },
  trustHost: true, // Add this option to trust the localhost
});
