const Joi = require('joi');

module.exports = Joi.object({
    fullName: Joi.string().min(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});