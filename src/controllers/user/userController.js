const dataModel = require("../../models/user/userModel");
const OTPModel = require("../../models/user/OTPModel");
const userCreate = require("../../services/user/userCreate");
const userLogin = require("../../services/user/userLogin");
const userUpdate = require("../../services/user/userUpdate");
const userDetails = require("../../services/user/userDetails");
const userResetPassword = require("../../services/user/userResetPassword");
const userOTPVerify = require("../../services/user/userOTPVerify");
const userEmailVerify = require("../../services/user/userEmailVerify");

exports.registrtion = async (req, res) => {
  let result = await userCreate(req, dataModel);
  res.status(200).json(result);
};

exports.login = async (req, res) => {
  let result = await userLogin(req, dataModel);
  res.status(200).json(result);
};

exports.profileUpdate = async (req, res) => {
  let result = await userUpdate(req, dataModel);
  res.status(200).json(result);
};

exports.profileDetails = async (req, res) => {
  let result = await userDetails(req, dataModel);
  res.status(200).json(result);
};

exports.recoverEmailVerify = async (req, res) => {
  let result = await userEmailVerify(req, dataModel);
  res.status(200).json(result);
};
exports.recoverOTPVerify = async (req, res) => {
  let result = await userOTPVerify(req, OTPModel);
  res.status(200).json(result);
};
exports.recoverResetPassword = async (req, res) => {
  let result = await userResetPassword(req, dataModel);
  res.status(200).json(result);
};
