import Order from "@/models/order";
import User from "@/models/user";
import connectDB from "@/utils/connectDB";

const getFilterUsers = async (search, page) => {
  const ITEM_PER_PAGE = 12;
  const regex = new RegExp(search, "i");

  try {
    connectDB();
    if (search === "") {
      const count = await User.find().count();
      const allUser = await User.find()
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1))
        .select("-password");

      return { count, allUser };
    } else {
      const count = await User.find({
        username: { $regex: regex },
      }).count();
      const allUser = await User.find({
        username: { $regex: regex },
      })
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1))
        .select("-password");

      return { count, allUser };
    }
  } catch (err) {
    console.log("err:", err);
  }
};
export default getFilterUsers;
