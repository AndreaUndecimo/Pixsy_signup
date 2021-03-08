const { User } = require('../models/user.model');
const { userValidation } = require('../utils/validation.helper');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const nodemailer = require('nodemailer');

async function registerUser(req, res) {
  const { email } = req.body;

  const { error } = userValidation({ email });
  error && res.status(400).send(error.details[0].message);

  // Check if user is already in db
  const emailExists = await User.findOne({ email });
  emailExists && res.status(400).send('Email already exists');

  const user = new User({ email });
  var transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '68169be7e3bb8d',
      pass: 'f91f848e1f76d0',
    },
  });

  var mailOptions = {
    from: '"Pixsy Support" <pixsy@support.com>',
    to: `${email}`,
    subject: 'Welcome to Pixsy',
    text: 'Hey there, welcome to Pixsy! 👋🏼',
    html: '<b>Hey there! </b><br> We are thrilled to have you here!',
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    } else {
      console.log('Message sent: %s', info.messageId);
    }
  });

  try {
    const { _id } = await user.save();
    const accessToken = jwt.sign({ _id }, process.env.TOKEN_SECRET);

    res.status(200).send(accessToken);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function getProfile(req, res) {
  try {
    // extract user info from the request
    const { _id, email, createdAt } = req.user;
    const user = { _id, email, createdAt };
    res.status(200).send(user);
  } catch (error) {
    res.status(401).send({ error, message: 'Resource not found' });
  }
}

async function resendEmail(req, res) {
  try {
    const { _id, email } = req.user;
    var transport = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '68169be7e3bb8d',
        pass: 'f91f848e1f76d0',
      },
    });

    var mailOptions = {
      from: '"Pixsy Support" <pixsy@support.com>',
      to: `${email}`,
      subject: 'Welcome to Pixsy',
      text: 'Hey there, welcome to Pixsy! 👋🏼',
      html: '<b>Hey there! </b><br> We are thrilled to have you here!',
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.error(error);
      } else {
        console.log('Message sent: %s', info.messageId);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

async function editEmail(req, res) {
  try {
    const { newEmail, oldEmail } = req.body;
    const userToModify = await User.findOneAndUpdate(
      { email: oldEmail },
      { email: newEmail }
    );
    console.log('userToModify', userToModify);

    res.status(200).send(userToModify);
  } catch (error) {
    console.error(error);
  }
}

module.exports = { registerUser, getProfile, resendEmail, editEmail };
