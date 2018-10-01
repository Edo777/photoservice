const Joi = require('joi');
const Schema = require("../data-schemas/photoservice.schema");
const auth = require("../../util/auth");

class Validate {
    static signUp(req, res, next) {
        Joi.validate(req.body, Schema.signUp, (err, result) => {
            if (err) {
                err = err.details ? err.details[0].message : err.message;
                return res.status(400).json(err);
            }
            next();
        });
    };

    static login(req, res, next) {
        Joi.validate(req.body, Schema.login, (err, result) => {
            if (err) {
                err = err.details ? err.details[0].message : err.message;
                return res.status(400).json(err);
            }
            next();
        });
    };

    static getOneFromAdmin(req, res, next) {
        Joi.validate(req.params, Schema.getOneFromAdmin, (err, result) => {
            if (err) {
                err = err.details ? err.details[0].message : err.message;
                return res.status(400).send(err);
            }
            next();
        });
    };

    static checkToken(req, res, next) {
        if (req.headers.token) {
            auth.jwtVerify(req.headers.token).then((decoded) => {
                if (!decoded.uid) {
                    return res.status(401).json(error);
                }
                res.locals['uid'] = decoded.uid;
                next()
            }).catch(error => res.status(401).json(error));
        } else {
            return res.status(400).json({ message: "TOKENERROR" });
        }
    };

    static update(req, res, next) {
        Joi.validate(req.body, Schema.update, (err, result) => {
            if (err) {
                err = err.details ? err.details[0].message : err.message;
                return res.status(400).send(err);
            }
            next();
        });
    }

    static isVerified(req, res, next) {

    }
}

module.exports = Validate;