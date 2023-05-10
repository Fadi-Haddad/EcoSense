const { Router } = require("express");
const router  = Router();

const {login} = require("../Controllers/auth.controller");

router.post("/login", login);

module.exports = router;