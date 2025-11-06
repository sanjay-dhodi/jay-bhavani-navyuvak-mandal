const jwt = require("jsonwebtoken");

async function verifyJwt(req, resp, next) {
  try {
    const token = req.cookies.accesstoken;
    if (!token) return resp.status(401).json({ message: "token not found" });

    const user = jwt.verify(token, process.env.JWT_SECRET);

    req.user = user;

    next();
  } catch (error) {
    resp.status(500).json({ message: "server internal error" });
  }
}

module.exports = { verifyJwt };
