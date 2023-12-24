import { NextResponse } from "next/server";
import Order from "@/models/order";
import connectDB from "@/utils/connectDB";

connectDB();

export async function GET(request, { params }) {
  const orderID = params.id;
  try {
    const order = await Order.findById(orderID);
    return new NextResponse(JSON.stringify(order), { status: 200 });
  } catch (error) {
    return new NextResponse(`Database Error => ${error}`, { status: 500 });
  }
}
