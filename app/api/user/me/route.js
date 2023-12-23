import { NextResponse } from "next/server";
import User from "@/models/user";
import connectDB from "@/utils/connectDB";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

connectDB();

export async function GET(request) {
  const token = request.cookies.get("token").value;
  if (token) {
    try {
      const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
      const user = await User.findOne({ _id: decodedToken.id }).select(
        "-password"
      );
      return NextResponse.json(
        {
          status: 200,
          mesaaage: "User found",
          data: user,
        }
        // { status: 200 }
      );
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  } else {
    return NextResponse.json({ mesaaage: "you are not login.." });
  }
}
