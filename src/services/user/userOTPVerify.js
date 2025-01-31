const userOTPVerify = async (request, dataModel) => {
  try {
    let email = request.params.email;
    let OTPCode = request.params.otp;
    let status = 0;
    email = email.toString();
    OTPCode = OTPCode.toString();
    let statusUpdate = 1;
    let OTPCount = await dataModel.aggregate([
      { $match: { email: email, otp: OTPCode, status: status } },
      { $count: "total" },
    ]);

    if (OTPCount.length > 0) {
      let OTPUpdate = await dataModel.updateOne(
        { email: email, otp: OTPCode, status: status },
        { email: email, otp: OTPCode, status: statusUpdate }
      );
      return { status: "success", data: OTPUpdate };
    } else {
      return { status: "failed", data: "Invalid OTP Address" };
    }
  } catch (error) {
    return { status: "failed", data: error.toString() };
  }
};

module.exports = userOTPVerify;
