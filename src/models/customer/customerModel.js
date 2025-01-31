const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    userEmail: { type: String },
    customerName: { type: String },
    phone: { type: String, unique: true },
    email: { type: String },
    address: { type: String },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const customerModel = mongoose.model("customers", dataSchema);
module.exports = customerModel;
