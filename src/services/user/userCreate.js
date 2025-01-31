const userCreate = async (request,dataModel)=>{
    try{
        let postBody = request.body;
        let data = await dataModel.create(postBody);
        return {status: "success", data: data};
    }
    catch(error){
        return {status: "failed", data: error.toString()};
    }
}

module.exports = userCreate;
