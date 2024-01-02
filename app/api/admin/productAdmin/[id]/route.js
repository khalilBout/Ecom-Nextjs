import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import Product from "@/models/product";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connectDB();
    // العثور على المدونة بإستخدام رقم التعريف
    const product = await Product.findById(id);

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  // امساك رقم تعريف المدونة
  const { id } = params;

  try {
    await connectDB();
    await Product.findByIdAndDelete(id);

    return new NextResponse("Product has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const { id } = params;
  const {
    category,
    desc,
    price,
    priceDrop,
    title,
    style,
    type,
    modelDataSending,
  } = await request.json();

  const finalPrice = price - price * priceDrop * 0.01;

  try {
    await connectDB();
    await Product.findByIdAndUpdate(id, {
      title: title,
      desc: desc,
      price: price,
      priceDrop: priceDrop,
      category: category,
      finalPrice: finalPrice,
      listModels: modelDataSending,
      style: style,
      type: type,
    });
    return new NextResponse("Product updated", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
