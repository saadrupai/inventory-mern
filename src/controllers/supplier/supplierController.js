const dataModel = require("../../models/supplier/supplierModel");
const createService = require("../../services/common/createService");
const updateService = require("../../services/common/updateService");
const dropDownService = require("../../services/common/dropDownService");
const listService = require("../../services/common/listService");

exports.createSupplier = async (req, res) => {
  let result = await createService(req, dataModel);
  res.status(200).json(result);
};

exports.updateSupplier = async (req, res) => {
  let result = await updateService(req, dataModel);
  res.status(200).json(result);
};

exports.listSupplier = async (req, res) => {
  let searchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let searchArray = [
    { name: searchRgx },
    { phone: searchRgx },
    { email: searchRgx },
    { address: searchRgx },
  ];
  let result = await listService(req, dataModel, searchArray);
  res.status(200).json(result);
};

exports.dropDownSupplier = async (req, res) => {
  let result = await dropDownService(req, dataModel, { _id: 1, name: 1 });
  res.status(200).json(result);
};
