import { Schema, models, model } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Category = models.Category || model("Category", categorySchema);

export default Category;
