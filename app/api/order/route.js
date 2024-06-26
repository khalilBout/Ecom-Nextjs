import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import Order from "@/models/order";
import Product from "@/models/product";

export const POST = async (request) => {
  const body = await request.json();

  const { userName, email, shippingAddress, orderItems, taxDelivery } = body;

  const promises = orderItems.map(async (item) => {
    const productOrder = await Product.findById(item.productID);
    const productID = productOrder._id;
    const priceDrop = productOrder.priceDrop;
    const productTitle = productOrder.title;
    const price = productOrder.price;
    const finalPrice = productOrder.finalPrice;

    const quantity = item.Qt;
    const Color = item.Color;
    const imageModel = item.imageModel;
    const sizeSelect = item.sizeSelect;
    const idModel = item.idModel;

    const PriceAfterDesc = finalPrice * quantity;
    return {
      productID,
      productTitle,
      idModel,
      price,
      finalPrice,
      priceDrop,
      Color,
      imageModel,
      sizeSelect,
      quantity,
      PriceAfterDesc,
    };
  });

  const orderProduct = await Promise.all(promises);

  const totolPyment = orderProduct.reduce(
    (total, item) => item.PriceAfterDesc + total,
    taxDelivery
  );
  const dataOrder = {
    userName,
    email,
    shippingAddress,
    orderProduct,
    totolPyment,
    taxDelivery,
  };
  try {
    await connectDB();
    await Order.create(dataOrder);
    return new NextResponse("Order created. ", { status: 201 });
  } catch (err) {
    return new NextResponse(`Database Error => ${err}`, { status: 500 });
  }
};
