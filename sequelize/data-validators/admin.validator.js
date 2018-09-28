const Schema = require("../data-schemas/admin.schema");
const Joi = require('joi');

class Validate {
    static login(req, res, next) {
        Joi.validate(req.body, Schema.login, (err, result) => {
            if (err) {
                err = err.details ? { message: err.details[0].message } : { message: err.message };
                return res.status(400).json(err);
            }
            next();
        });
    }
}

module.exports = Validate;