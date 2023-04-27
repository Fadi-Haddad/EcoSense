const { Router } = require("express");
const router  = Router();
const {login,} = require("../Controllers/user.controller.js");

router.get("/login",login);

module.exports = router;