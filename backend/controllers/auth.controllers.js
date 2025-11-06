const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

// login
async function login(req, resp) {
  try {
    const { username, password } = req.body;

    const foundUser = await userModel.findOne({ username });

    if (!foundUser)
      return resp.status(401).json({ message: "invalid credentials" });

    const matchPassword = await bcrypt.compare(password, foundUser.password);

    if (!matchPassword)
      return resp.status(401).json({ message: "invalid credentials" });

    const token = jwt.sign(
      { id: foundUser.id, role: foundUser.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "15m",
      }
    );

    resp.cookie("accesstoken", token, {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 15,
    });

    resp.status(200).json({ message: "login successfull" });
  } catch (error) {
    resp
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
}

// logout

async function logout(req, resp) {
  try {
    resp.clearCookie("accesstoken", {
      httpOnly: true,
      secure: false,
    });

    resp.status(200).json({ message: "logout successfull" });
  } catch (error) {
    resp
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
}

module.exports = { login, logout };
