import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter product name"],
  },
  desc: {
    type: String,
    required: [true, "Please enter product description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  priceDrop: {
    type: Number,
    required: [false],
  },
  finalPrice: {
    type: Number,
    required: [true],
  },
  category: {
    type: String,
    required: [true],
    enum: {
      values: ["man", "woman", "children"],
    },
  },
  listModels: [
    {
      size: [
        {
          theSize: { type: String, required: [false] },
          stoke: { type: Number, required: [true] },
        },
      ],
      selectedColor: { type: String, required: [false] },
      url: [{ type: String }],
    },
  ],
  style: {
    type: String,
    required: [false],
  },
  type: {
    type: String,
    required: [false],
    enum: {
      values: ["New", "Best", "Soled"],
    },
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// export default mongoose?.models?.Product ||
//   mongoose.model("Products", ProductSchema);

const Product =
  mongoose.models.Products || mongoose.model("Products", ProductSchema);

export default Product;
