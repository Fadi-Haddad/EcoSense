const { Router } = require("express");
const router  = Router();
const {login,createUser} = require("../Controllers/user.controller.js");

router.get("/login",login);
router.get("/create_user",createUser);

module.exports = router;