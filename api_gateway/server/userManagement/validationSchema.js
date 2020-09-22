const Joi = require('joi');

module.exports = {

    // Joi aborts early by default which means it stops 
    // validation on the first error and doesn’t check 
    // rest of the fields. To validate all fields and get 
    // all errors at once you need to set abortEarly to false.
    schemas: {
        userSchema: Joi.object().keys({
            firstName: Joi
                    .string()
                    .required(),
            lastName: Joi
                    .string()
                    .allow('')
                    .optional(),
            email: Joi
                    .string()
                    .email()
                    .required(),
            password: Joi
                    .string()
                    .min(8)
                    .max(30)
                    .pattern(new RegExp(
                        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
                        )
                    )
                    .required()
                    .messages({
                        "string.pattern.base": `
                        1. Password must be 8 characters long.
                        2. Password must contain at least 1 lowercase alphabetical character.
                        3. Password must contain at least 1 uppercase alphabetical character.
                        4. Password must contain at least 1 numeric character.
                        5. Password must contain at least one special character.
                    `
                    })
        }).options({abortEarly: false})  
    },

    validateBody: (schema) => {
        return (req, res, next) => {
            const result = schema.validate(req.body);

            if (result.error) {
                return res.status(400).json({
                    message: result.error.details
                })
            } else {
                if (!req.value) {
                    req.value = {}
                }
                req.value['body'] = result.value;
                next();
            };
        };
    }
};
