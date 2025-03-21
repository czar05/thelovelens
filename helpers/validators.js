/* Module for all validations */
import Joi from 'joi';
import Constants from './constants.js';
import ServerResponse from './server-response.js';

module.exports = {
  registerUserValidator: function (req, res, next) {
    const schema = Joi.object({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
      password: Joi.string().min(8).max(15).required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      businessType: Joi.string()
        .valid(
          Constants.BUSINESS_TYPES.AGENCY,
          Constants.BUSINESS_TYPES.MGA,
          Constants.BUSINESS_TYPES.PORTAL
        )
        .required(),
      businessName: Joi.string().required()
    });
    validateRequest(req, res, next, schema);
  }

};

// Conf Method for validating all request
function validateRequest (req, res, next, schema) {
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true // remove unknown props
  };
  const body =
    req.method === 'POST' || req.method === 'PUT' ? req.body : req.query;
  const { error, value } = schema.validate(body, options);
  if (error) {
    ServerResponse.sendInvalidRequest(res, {
      message: `Validation error: ${error.details
        .map((x) => x.message)
        .join(', ')}`
    });
  } else {
    req.body = value;
    next();
  }
}
