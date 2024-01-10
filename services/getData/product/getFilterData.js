import Product from "@/models/product";
import connectDB from "@/utils/connectDB";

export const getProducts = async (search, page, category) => {
  const ITEM_PER_PAGE = 12;
  const regex = new RegExp(search, "i");

  try {
    connectDB();
    if (category === "") {
      const count = await Product.find({
        title: { $regex: regex },
      }).count();
      const allProducts = await Product.find({
        title: { $regex: regex },
      })
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));
      return { count, allProducts };
    } else {
      const count = await Product.find({
        title: { $regex: regex },
        category: category,
      }).count();
      const allProducts = await Product.find({
        title: { $regex: regex },
        category: category,
      })
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));
      console.log("data from fan", count, allProducts);
      return { count, allProducts };
    }
  } catch (err) {
    console.log("err:", err);
    // throw new Error("Failed to fetch products!");
  }
};
