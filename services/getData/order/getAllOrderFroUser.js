import Order from "@/models/order";
import connectDB from "@/utils/connectDB";

export const getAllOrderOfUser = async (email) => {
  try {
    connectDB();
    const AllOrders = await Order.find({
      email: email,
    });
    return AllOrders;
  } catch (err) {
    console.log("err:", err);
  }
};
