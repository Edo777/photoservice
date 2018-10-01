const Schema = require("../data-schemas/category.schema");
const Joi = require('joi');

class Validate {
    static create(req, res, next) {
        Joi.validate(req.body, Schema.create, (err, result) => {
            if (err) {
                err = err.details ? err.details[0].message : err.message;
                return res.status(400).send(err);
            }
            next();
        })
    };

    static update(req, res, next) {
        Joi.validate(req.params, Schema.update['params'], (err, result) => {
            if (err) {
                err = err.details ? err.details[0].message : err.message;
                return res.status(400).send(err);
            }
            Joi.validate(req.body, Schema.update['body'], (err, result) => {
                if (err) {
                    err = err.details ? err.details[0].message : err.message;
                    return res.status(400).send(err);
                }
                next();
            });
        });
    };

    static delete(req, res, next) {
        Joi.validate(req.params, Schema.delete, (err, result) => {
            if (err) {
                err = err.details ? err.details[0].message : err.message;
                return res.status(400).send(err);
            }
            next();
        })
    };
}

module.exports = Validate;