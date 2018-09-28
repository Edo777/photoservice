const Joi = require('joi');

class Schema {
    static get create() {
        return Joi.object().keys({
            serviceId: Joi.string().guid().required(),
            data: Joi.object().required(),
            prize: Joi.number().required()
        });
    };

    static get update() {
        return {
            "body":
                Joi.object().keys({
                    serviceId: Joi.string().guid(),
                    data: Joi.object().not(null),
                    prize: Joi.number().not(null),
                }),
            "params":
                Joi.object().keys({
                    uid: Joi.string().guid().required()
                })
        };
    };
}

module.exports = Schema;