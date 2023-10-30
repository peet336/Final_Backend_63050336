const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    title: { type: String, required: true },
    income: { type: String, default: false },
    expense: { type: String, default: false },
  },
  {
    collection: "todos",
    timestamps: true,
  }
);

const model = mongoose.model("Todo", schema);

module.exports = model;
