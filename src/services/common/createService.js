const createService = async (request, dataModel) => {
  try {
    let postBody = request.body;
    postBody.userEmail = request.headers["email"];
    let data = await dataModel.create(postBody);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "failed", data: error.toString() };
  }
};

module.exports = createService;
