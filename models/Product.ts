import { Schema, models, model } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    productDetails: {
      type: String,
      default: "",
    },
    technicalDetails: {
      type: Schema.Types.ObjectId,
      ref: "File",
    },
    videoTutorial: {
      type: String,
      default: "",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", productSchema);

export default Product;
