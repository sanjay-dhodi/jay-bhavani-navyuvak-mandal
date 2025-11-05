const express = require("express");
const router = express.Router();
const {
  getAllRecord,
  getSingleRecord,
} = require("../controllers/homepage.controllers");

router.get("/allrecord", getAllRecord);
router.get("/singlerecord", getSingleRecord);

module.exports = router;
