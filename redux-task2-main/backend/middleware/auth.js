const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authenticateToken = (req, res, next) => {
  try {
    const jwtToken = req.header("token");

    if (!jwtToken) {
      return res.status(403).json("Not Authorize");
    }

    const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);

    req.user = payload.user;
  } catch (err) {
    console.error(err.message);
    res.status(403).send("Not Authorize");
  }
  next();
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      error: "Access denied",
    });
  }
  next();
};
module.exports = { authenticateToken, isAdmin };
