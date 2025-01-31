const OTPModel = require("../../models/user/OTPModel");

const userResetPassword = async (request, dataModel) => {
  let email = request.body["email"];
  let OTPCode = request.body["OTP"];
  let newPass = request.body["password"];
  let statusUpdate = 1;
  try {
    let OTPUsedCount = await OTPModel.aggregate([
      { $match: { email: email, otp: OTPCode, status: statusUpdate } },
      { $count: "total" },
    ]);
    if (OTPUsedCount.length > 0) {
      let passUpdate = await dataModel.updateOne(
        { email: email },
        { password: newPass }
      );
      return { status: "success", data: passUpdate };
    } else {
      return { status: "failed", data: "Invalid Request" };
    }
  } catch (error) {
    return { status: "failed", data: error.toString() };
  }
};

module.exports = userResetPassword;
