import Order from "@/models/order";
import connectDB from "@/utils/connectDB";

const getOrderByFilter = async (state, page) => {
  const ITEM_PER_PAGE = 12;
  try {
    connectDB();
    if (state === "") {
      const count = await Order.find().count();
      const allOrder = await Order.find()
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));

      return { count, allOrder };
    } else {
      if (state === "processing") {
        const count = await Order.find({
          isProcess: true,
        }).count();
        const allOrder = await Order.find({
          isProcess: true,
        })
          .limit(ITEM_PER_PAGE)
          .skip(ITEM_PER_PAGE * (page - 1));
        return { count, allOrder };
      }
      if (state === "completed") {
        const count = await Order.find({
          isProcess: false,
        }).count();
        const allOrder = await Order.find({
          isProcess: false,
        })
          .limit(ITEM_PER_PAGE)
          .skip(ITEM_PER_PAGE * (page - 1));
        return { count, allOrder };
      }
    }
  } catch (err) {
    console.log("err:", err);
  }
};
export default getOrderByFilter;
