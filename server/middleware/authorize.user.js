const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const { User } = require('../models/user.model')

dotenv.config()

// middleware function to be added to protected routes
async function authorizeUser(req, res, next) {
  const authHeaders = req.headers['authorization']

  if (!authHeaders) {
    res.status(403).send('Access Denied') //access denied
  }

  try {
    // attempt to decode id from token payload
    const { _id } = jwt.verify(authHeaders, process.env.TOKEN_SECRET)
    // and try to find the user
    const user = await User.findOne({ _id })

    res.user = user
    res.send(res.body)
    next()
  } catch (error) {
    res.status(401).send('Invalid Token')
  }
}

module.exports = { authorizeUser }
