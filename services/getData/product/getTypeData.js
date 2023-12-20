import Product from "@/models/product";
import connectDB from "@/utils/connectDB";

export const getTypeProducts = async (type) => {
  try {
    connectDB();
    if (type === "" || type === undefined) {
      const allProducts = await Product.find();
      return allProducts;
    } else {
      const allProducts = await Product.find({
        type: type,
      });
      return allProducts;
    }
  } catch (err) {
    console.log("err:", err);
    throw new Error("Failed to fetch products!");
  }
};
