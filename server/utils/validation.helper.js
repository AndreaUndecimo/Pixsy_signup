const Joi = require('joi');

const userValidation = (user) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
  });
  return schema.validate(user);
};

module.exports = { userValidation };
