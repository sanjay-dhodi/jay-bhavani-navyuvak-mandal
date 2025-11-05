const express = require("express");
const router = express.Router();
const {
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/admin.controllers");

router.post("/admin/create", createRecord);
router.patch("/admin/update/:id", updateRecord);
router.delete("/admin/delete/:id", deleteRecord);

module.exports = router;
