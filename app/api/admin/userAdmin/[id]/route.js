import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import User from "@/models/user";

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connectDB();
    await User.findByIdAndDelete(id);

    return new NextResponse("User has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connectDB();
    const user = await User.findById(id);
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
