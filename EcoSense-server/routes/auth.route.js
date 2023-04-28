const { Router } = require("express");
const router  = Router();
const {login,createUser} = require("../Controllers/auth.controller.js");

router.get("/login",login);
router.post("/create_user", authMiddleware, createUser)

module.exports = router;