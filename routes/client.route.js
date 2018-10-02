const router = require("express").Router();
const Service = require("../service/client.service");

router.post('/', Service.signUp);

module.exports = router;