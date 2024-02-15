import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import Order from "@/models/order";

export const GET = async (request) => {
  try {
    await connectDB();
    const orders = await Order.find();
    return new NextResponse(JSON.stringify(orders), { status: 200 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newOrder = new Category(body);
  try {
    await connectDB();
    await newOrder.save();
    return new NextResponse("new order has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};
