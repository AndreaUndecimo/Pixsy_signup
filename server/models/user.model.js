const { mongoose } = require('./')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
})

const User = mongoose.model('User', userSchema)

module.exports = { User }
