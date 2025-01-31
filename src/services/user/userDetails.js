const userDetails = async (request, dataModel) => {
  try {
    let email = request.headers["email"];
    let data = await dataModel.aggregate([{ $match: { email: email } }]);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "failed", data: error.toString() };
  }
};

module.exports = userDetails;
