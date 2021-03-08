const { User } = require('../models/user.model');
const { userValidation } = require('../utils/validation.helper');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

async function registerUser(req, res) {
  const { email } = req.body.data;

  const { error } = userValidation({ email });
  error && res.status(400).send(error.details[0].message);

  // Check if user is already in db
  const emailExists = await User.findOne({ email });
  emailExists && res.status(400).send('Email already exists');

  const user = new User({ email });

  try {
    const { _id } = await user.save();
    const accessToken = jwt.sign({ _id }, process.env.TOKEN_SECRET);

    res.status(200).send(accessToken);
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = { registerUser };
