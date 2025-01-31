const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    userEmail: { type: String },
    name: { type: String, unique: true },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const categoryModel = mongoose.model("categories", dataSchema);
module.exports = categoryModel;
