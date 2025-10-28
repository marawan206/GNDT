import { Schema, models, model } from "mongoose";

const fileSchema = new Schema(
  {
    name: { type: String, required: true },
    data: { type: Buffer, required: true },
    type: { type: String },
    size: { type: Number },
  },
  { timestamps: true }
);

const File = models.File || model("File", fileSchema);
export default File;
