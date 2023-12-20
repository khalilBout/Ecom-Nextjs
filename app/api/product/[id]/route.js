import { NextResponse } from "next/server";
import Product from "@/models/product";
import connectDB from "@/utils/connectDB";

connectDB();

export async function GET(request, { params }) {
  const productID = params.id;
  try {
    const product = await Product.findById(productID);
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new NextResponse(`Database Error => ${error}`, { status: 500 });
  }
}
