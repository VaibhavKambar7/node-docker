const express = require('express')

const router = express.Router()

const {signUp,login} = require("../controllers/authController")

router.route("/signup").post(signUp)
router.route("/login").post(login)
//router.post("signup",authController.signUP)

module.exports = router