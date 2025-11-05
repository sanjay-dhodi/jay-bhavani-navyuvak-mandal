const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      default: "staff",
    },
  },
  {
    timestamps: true,
  }
);
const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
