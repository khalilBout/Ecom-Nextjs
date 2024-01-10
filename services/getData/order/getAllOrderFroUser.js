import Order from "@/models/order";
import connectDB from "@/utils/connectDB";

export const getAllOrderOfUser = async (idUser) => {
  try {
    connectDB();
    const AllOrders = await Order.find({
      userId: idUser,
    });
    return { AllOrders };
  } catch (err) {
    console.log("err:", err);
  }
};
