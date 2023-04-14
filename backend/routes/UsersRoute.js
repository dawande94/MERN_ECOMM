const express = require("express");
const { authController, getUserprofile, registerUser } = require("../controller/usersController");
const router = express.Router();
const {protect} = require('../middlewares/authMiddleware');

//user registration
router.route('/').post(registerUser);

// post email and password auth
router.post('/login',authController);

// get user profile Private Route
router.route("/profile").get(protect,getUserprofile);

module.exports = router;