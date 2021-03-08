const express = require('express');
const {
  registerUser,
  getProfile,
  resendEmail,
  editEmail,
} = require('../controllers/register.controller');
const { authorizeUser } = require('../middleware/authorize.user');
const router = express.Router();

router.post('/register', registerUser);
router.get('/profile', authorizeUser, getProfile);
router.post('/resend_email', authorizeUser, resendEmail);
router.put('/edit_email', editEmail);

module.exports = router;
