let jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token = req.headers["token"];
  jwt.verify(token, "Secretkey1703069", function (error, decoded) {
    if (error) {
      console.log(token);
      res.status(401).json({ status: "unauthorized" });
    } else {
      let email = decoded["data"];
      req.headers.email = email;
      next();
    }
  });
};
