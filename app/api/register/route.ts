import { NextResponse } from "next/server";
// import { saltAndHashPassword } from "@/utils/helper";
import { db } from "@/app/api/db";
import { getUserByEmail } from "@/actions/get/getUserByEmail.action";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;

  let user = await getUserByEmail(email);

  if (user) {
    return NextResponse.json({
      message: "User already exists!",
      status: 400,
    });
  }

  // const hashedPassword = saltAndHashPassword(password);

  await db.user.create({
    data: {
      email,
      name,
      password,
      cart: {
        create: {
          total: 0,
          totalItems: 0,
          cartItems: [],
        },
      },
    },
    include: {
      cart: true,
    },
  });

  return NextResponse.json({
    status: 200,
    message: "User created successfully!",
  });
}
