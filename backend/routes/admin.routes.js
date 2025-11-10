const express = require("express");
const router = express.Router();
const {
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/admin.controllers");
const { verifyJwt } = require("../middleweres/authMiddlewere");

router.post("/admin/record/create", createRecord);
router.patch("/admin/record/update/:id", updateRecord);
router.delete("/admin/record/delete/:id", verifyJwt, deleteRecord);

module.exports = router;
