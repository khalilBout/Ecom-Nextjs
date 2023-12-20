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
  console.log("data=>", newOrder);
  try {
    await connectDB();
    console.log("start saving .....");
    // await Product.create({ ...newProduct });
    await newOrder.save();
    console.log(" saving dan ....");
    return new NextResponse("new order has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};
