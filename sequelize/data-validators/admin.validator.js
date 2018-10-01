const Schema = require("../data-schemas/admin.schema");
const Joi = require('joi');

class Validate {
    static login(req, res, next) {
        Joi.validate(req.body, Schema.login, (err, result) => {
            if (err) {
                err = err.details ? err.details[0].message : err.message;
                return res.status(400).send(err);
            }
            next();
        });
    }
}

module.exports = Validate;