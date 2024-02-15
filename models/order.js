import mongoose from "mongoose";
import Product from "./product";
import User from "./user";
import Profile from "./profile";

const OrderSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [false],
  },
  email: {
    type: String,
    required: [false],
  },
  shippingAddress: {
    clientName: {
      type: String,
      required: [true],
    },
    address: {
      type: String,
      required: [true],
    },
    city: {
      type: String,
      required: [true],
    },
    phone: {
      type: String,
      required: [true],
    },
    willai: {
      type: String,
      required: [true],
    },
  },
  orderProduct: [
    {
      productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
      },
      productTitle: {
        type: String,
        required: [true],
      },
      imageModel: {
        type: String,
        required: [false],
      },
      idModel: {
        type: String,
        required: [true],
      },
      quantity: {
        type: Number,
        required: [true],
      },
      price: {
        type: Number,
        required: [true],
      },
      finalPrice: {
        type: Number,
        required: [true],
      },
      priceDrop: {
        type: Number,
        required: [false],
      },
      Color: {
        type: String,
        required: [true],
      },
      sizeSelect: {
        type: String,
        required: [true],
      },
      PriceAfterDesc: {
        type: Number,
        required: [true],
      },
    },
  ],
  totolPyment: {
    type: Number,
    required: true,
  },
  taxDelivery: { type: Number, required: true },
  isProcess: {
    type: Boolean,
    required: true,
    default: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;
