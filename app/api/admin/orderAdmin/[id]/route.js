import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import Order from "@/models/order";
import Product from "@/models/product";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connectDB();
    const order = await Order.findById(id);

    return new NextResponse(JSON.stringify(order), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  // امساك رقم تعريف المدونة
  const { id } = params;

  try {
    await connectDB();
    await Order.findByIdAndDelete(id);

    return new NextResponse("Order has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const { id } = params;
  // const dataOrder = await Order.findById(id);
  const dataOrder = await request.json();
  // const { newDataOrder } = await request.json();
  // update order (update value to isProcess  )
  const newOrder = {
    // client: dataOrder.newClient,
    userId: dataOrder.userId,
    userName: dataOrder.userName,
    email: dataOrder.email,
    taxDelivery: dataOrder.taxDelivery,
    orderProduct: dataOrder.orderProduct,
    shippingAddress: dataOrder.shippingAddress,
    isProcess: false,
  };

  // update Product after delete product of order from stoke of product in dataBase
  // get list of product from order
  const listProduct = newOrder.orderProduct;

  // lop to this list and do logic
  const promises = listProduct?.map(async (item) => {
    // get thi id of etch product
    const id = item.productID;
    const product = await Product.findById(id);
    // get info of product from order to use him
    const quantity = item.quantity;
    const selectedColor = item.Color;
    const selectModel = product.listModels.find(
      (x) => x.selectedColor === selectedColor
    );
    const sizeOfOrder = item.sizeSelect;

    // update list of product model after get selected model
    let newListModel = [];
    product.listModels.map((i) => {
      if (i === selectModel) {
        let newSize = [];
        i.size.map((x) => {
          if (x.theSize === sizeOfOrder) {
            const newStoke = x.stoke - quantity;
            newSize.push({
              _id: x._id,
              theSize: x.theSize,
              stoke: newStoke,
            });
          } else {
            newSize.push(x);
          }
        });
        newListModel.push({
          _id: i._id,
          size: newSize,
          selectedColor: i.selectedColor,
          url: i.url,
        });
      } else {
        newListModel.push(i);
      }
    });

    // update the product
    const newProduct = {
      _id: product._id,
      title: product.title,
      desc: product.desc,
      price: product.price,
      priceDrop: product.priceDrop,
      finalPrice: product.finalPrice,
      title: product.title,
      category: product.category,
      style: product.style,
      type: product.type,
      listModels: newListModel,
    };

    return newProduct;
  });

  const ListProductUpdate = await Promise.all(promises);
  try {
    await connectDB();
    ListProductUpdate.map(async (item) => {
      const Id = item._id;
      await Product.findByIdAndUpdate(Id, item);
    });
    await Order.findByIdAndUpdate(id, newOrder);

    return new NextResponse("Order and Product updated", { status: 200 });
  } catch (err) {
    console.log("err:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
