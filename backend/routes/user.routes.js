const express = require("express");
const router = express.Router();
const {
  fetchAllUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controllers");

router.get("/admin/user/getuser", fetchAllUser);
router.post("/admin/user/create", createUser);
router.delete("/admin/user/delete/:id", deleteUser);
router.put("/admin/user/update/:id", updateUser);

module.exports = router;
