const OTPModel = require("../../models/user/OTPModel");
const sendEmailUtility = require("../../utilities/emailUtility");

const userEmailVerify = async (request, dataModel) => {
  try {
    // email account query
    let email = request.params.email;
    let OTPCode = Math.floor(Math.random() * 1000000);
    let userCount = await dataModel.aggregate([
      { $match: { email: email } },
      { $count: "total" },
    ]);
    if (userCount.length > 0) {
      // insert otp
      await OTPModel.create({ email: email, otp: OTPCode });
      //email send
      let sendEmail = await sendEmailUtility(
        email,
        "Your OTP Code is: " + OTPCode,
        "Inventory Pin Verification"
      );
      return { status: "success", data: sendEmail };
    } else {
      return { status: "failed", data: "No User Found" };
    }
  } catch (error) {
    console.log(error);
    return { status: "failed", data: error.toString() };
  }
};

module.exports = userEmailVerify;
