import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import Product from "@/models/product";

export const GET = async (request) => {
  try {
    await connectDB();
    const products = await Product.find();
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newProduct = new Product(body);
  try {
    await connectDB();
    await newProduct.save();
    return new NextResponse("Product has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};
