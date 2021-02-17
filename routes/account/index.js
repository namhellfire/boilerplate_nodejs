const express = require('express');
const router = express.Router();

const userController = require("./../../controllers/user");

/**
 * API keys and Passport configuration.
 */
const passportConfig = require('./../../config/passport');

router.get('/verify', passportConfig.isAuthenticated, userController.getVerifyEmail);
router.get('/verify/:token', passportConfig.isAuthenticated, userController.getVerifyEmailToken);
router.get('/', passportConfig.isAuthenticated, userController.getAccount);
router.post('/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
router.post('/password', passportConfig.isAuthenticated, userController.postUpdatePassword);
router.post('/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);
router.get('/unlink/:provider', passportConfig.isAuthenticated, userController.getOauthUnlink);

module.exports = router