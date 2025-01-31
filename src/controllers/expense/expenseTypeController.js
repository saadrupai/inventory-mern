const dataModel = require("../../models/expense/expenseTypeModel");
const createService = require("../../services/common/createService");
const updateService = require("../../services/common/updateService");
const dropDownService = require("../../services/common/dropDownService");
const listService = require("../../services/common/listService");

exports.createExpenseTypes = async (req, res) => {
  let result = await createService(req, dataModel);
  res.status(200).json(result);
};

exports.updateExpenseTypes = async (req, res) => {
  let result = await updateService(req, dataModel);
  res.status(200).json(result);
};

exports.listExpenseTypes = async (req, res) => {
  let searchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let searchArray = [{ name: searchRgx }];
  let result = await listService(req, dataModel, searchArray);
  res.status(200).json(result);
};

exports.dropDownExpenseTypes = async (req, res) => {
  let result = await dropDownService(req, dataModel, { _id: 1, name: 1 });
  res.status(200).json(result);
};
