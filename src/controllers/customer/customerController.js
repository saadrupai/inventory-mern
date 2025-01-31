const dataModel = require("../../models/customer/customerModel");
const createService = require("../../services/common/createService");
const updateService = require("../../services/common/updateService");
const dropDownService = require("../../services/common/dropDownService");
const listService = require("../../services/common/listService");

exports.createCustomer = async (req, res) => {
  let result = await createService(req, dataModel);
  res.status(200).json(result);
};
exports.updateCustomer = async (req, res) => {
  let result = await updateService(req, dataModel);
  res.status(200).json(result);
};

exports.listCustomer = async (req, res) => {
  let searchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let searchArray = [
    { customerName: searchRgx },
    { phone: searchRgx },
    { email: searchRgx },
    { address: searchRgx },
  ];
  let result = await listService(req, dataModel, searchArray);
  res.status(200).json(result);
};

exports.dropDownCustomer = async (req, res) => {
  let result = await dropDownService(req, dataModel, {
    _id: 1,
    customerName: 1,
  });
  res.status(200).json(result);
};
