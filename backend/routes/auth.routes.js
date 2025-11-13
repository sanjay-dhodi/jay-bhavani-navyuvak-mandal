const express = require("express");
const router = express.Router();
const { login, logout, isAuth } = require("../controllers/auth.controllers");
const { verifyJwt } = require("../middleweres/authMiddlewere");

router.post("/admin/login", login);
router.post("/admin/logout", logout);
router.get("/admin/verify", verifyJwt, isAuth);

module.exports = router;
