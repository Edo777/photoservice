const Joi = require('joi');

class Schema {
    static get signUp() {
        return Joi.object().keys({
            username: Joi.string().required(),
            password: Joi.string().required(),
            image: Joi.string(),
            avatar: Joi.string(),
            card: Joi.string(),
            phone: Joi.string().required(),
            name: Joi.string().required(),
            description: Joi.string(),
            address: Joi.string().required()
        });
    };

    static get login() {
        return Joi.object().keys({
            username: Joi.string().required(),
            password: Joi.string().required()
        });
    };

    static get getOneFromAdmin() {
        return Joi.object().keys({
            uid: Joi.string().guid().required()
        });
    };

    static get update() {
        return Joi.object().keys({
            username: Joi.string().not(null),
            image: Joi.string().not(null),
            avatar: Joi.string().not(null),
            card: Joi.string().not(null),
            phone: Joi.string().not(null),
            name: Joi.string().not(null),
            description: Joi.string().not(null),
            address: Joi.string().not(null)
        });
    }

}

module.exports = Schema;