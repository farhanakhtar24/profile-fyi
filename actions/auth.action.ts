"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { getUserByEmail } from "./get/getUserByEmail.action";

export const login = async (provider: string) => {
  await signIn(provider, {
    redirectTo: "/product/category",
  });
  revalidatePath("/product/category");
};

export const logout = async () => {
  await signOut({
    redirectTo: "/",
  });

  revalidatePath("/");
};

export const loginWithCreds = async (email: string, password: string) => {
  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "User does not exist!" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/product/category",
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

  revalidatePath("/product/category");
};
