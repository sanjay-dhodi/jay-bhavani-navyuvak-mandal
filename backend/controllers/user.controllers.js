const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

// create admin user
async function createUser(req, resp) {
  try {
    c;

    const { username, password, email } = req.body;

    const hashPassword = await bcrypt.hash(password, 12);

    const createdUser = await userModel.create({
      username,
      email,
      password: hashPassword,
    });

    if (!createdUser) {
      return resp.status(500).json({ message: "failed to create user" });
    }

    return resp.status(201).json({ message: "succesfully user created" });
  } catch (error) {
    resp
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
}

//  read admin user
async function fetchAllUser(req, resp) {
  try {
    const allUser = await userModel.find({});

    if (allUser.length === 0) {
      return resp.status(500).json({ message: " no user found" });
    }

    return resp
      .status(200)
      .json({ message: "user successfully fetch", users: allUser });
  } catch (error) {
    resp
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
}

// delete admin user
async function deleteUser(req, resp) {
  try {
    const { id } = req.params.id;

    const deletedUser = await userModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return resp.status(500).json({ message: "faild to delete user" });
    }

    return resp.status(200).json({ message: "user succefully deleted" });
  } catch (error) {
    resp
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
}

// update admin user
async function updateUser(req, resp) {
  try {
    const id = req.params.id;
    const data = req.body;

    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );

    if (!updatedUser) {
      return resp.status(500).json({ message: "failed to update user" });
    }

    return resp.status(200).json({ message: "user updated successfully" });
  } catch (error) {
    resp
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
}

module.exports = { fetchAllUser, createUser, deleteUser, updateUser };
