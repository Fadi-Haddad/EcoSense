const { Router } = require("express");
const router  = Router();
const {login,createUser} = require("../Controllers/user.controller.js");

router.get("/login",login);
router.post("/create_user",createUser);

module.exports = router;