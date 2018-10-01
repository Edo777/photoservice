const Joi = require('joi');

class Schema {
    static get create() {
        return Joi.object().keys({
            categoryId: Joi.string().guid().required(),
            name: Joi.string().required().min(5).max(30),
            type: Joi.string().guid().required(),
            data: Joi.object().required()
        });
    };

    static get update() {
        return {
            "body":
                Joi.object().keys({
                    categoryId: Joi.string().guid().not(null),
                    name: Joi.string().min(5).max(30).not(null),
                    data: Joi.object().not(null)
                }),
            "params":
                Joi.object().keys({
                    uid: Joi.string().guid().required()
                })
        };
    };

    static get delete() {
        return Joi.object().keys({
            uid: Joi.string().guid().required()
        });
    };

}

module.exports = Schema;