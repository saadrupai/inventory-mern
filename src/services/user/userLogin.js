const createToken = require("../../utilities/createToken");

const userLogin = async (request, dataModel) => {
  try {
    let postBody = request.body;
    let data = await dataModel.aggregate([
      { $match: postBody },
      {
        $project: {
          _id: 0,
          email: 1,
          firstName: 1,
          lastName: 1,
          mobile: 1,
          photo: 1,
        },
      },
    ]);

    if (data.length > 0) {
      let token = await createToken(data[0].email);

      return { status: "success", token: token, data: data[0] };
    } else {
      return { status: "unauthorized" };
    }
  } catch (error) {
    return { status: "failed", data: error.toString() };
  }
};

module.exports = userLogin;
