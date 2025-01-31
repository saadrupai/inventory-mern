const dataModel = require("../../models/category/categoryModel");
const createService = require("../../services/common/createService");
const updateService = require("../../services/common/updateService");
const dropDownService = require("../../services/common/dropDownService");
const listService = require("../../services/common/listService");

exports.createCategory = async (req, res) => {
  let result = await createService(req, dataModel);
  res.status(200).json(result);
};

exports.updateCategory = async (req, res) => {
  let result = await updateService(req, dataModel);
  res.status(200).json(result);
};

exports.listCategory = async (req, res) => {
  let searchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let searchArray = [{ name: searchRgx }];
  let result = await listService(req, dataModel, searchArray);
  res.status(200).json(result);
};

exports.dropDownCategory = async (req, res) => {
  let result = await dropDownService(req, dataModel, { _id: 1, name: 1 });
  res.status(200).json(result);
};
