const jwt = require("jsonwebtoken");
//secrete key
const JWT_SECRETE = "Akshayisgoodb$oy";

fetchuser = (req, res, next) => {
  ///get the User from Jwt Token And Add id to req Object
  const token = req.header("auth-token");

  if (!token) {
    res.status(401).send({ error: "Please Authinticate using token" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRETE);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please Authinticate using token" });
  }
};

module.exports = fetchuser;
