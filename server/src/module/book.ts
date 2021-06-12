import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    tittle: { type: String, required: true, unigue: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export const Book = model("Book", schema);
