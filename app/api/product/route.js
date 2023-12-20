import { NextResponse } from "next/server";
import Product from "@/models/product";
import connectDB from "@/utils/connectDB";

export async function GET() {
  try {
    connectDB();
    const allProducts = await Product.find();
    return new NextResponse(JSON.stringify(allProducts), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(`Database Error => ${error}`, { status: 500 });
  }
}
