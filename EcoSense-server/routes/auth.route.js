const { Router } = require("express");
const router  = Router();
const {login,createUser} = require("../Controllers/auth.controller.js");

const authMiddleware = require ("../middlewares/auth.middleware.js")

router.post("/login",login);
// router.post("/create_user", authMiddleware, createUser);

module.exports = router;