import User from "@/models/user";
import connectDB from "@/utils/connectDB";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  // catch data from page of register
  const { name, email, password } = await request.json();

  // connect data base
  await connectDB();

  // hashed Password with leb of script (bcrypt)
  const hashedPassword = await bcrypt.hash(password, 5);

  // creat user with model User
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  // save user in data base and return response with mesg of success or catch error
  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
