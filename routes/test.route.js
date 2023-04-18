const express = require('express')
const router = express.Router()
const method = require("../controllers/test")

router.get("/testsignup" , method.testing)

module.exports = router