const Joi = require('joi');

class Schema {
    static get create(){
        return Joi.object().keys({
            parentId: Joi.string(),
            name: Joi.string().required().min(5).max(30),
            description: Joi.string().required().min(5).max(100),
            photo: Joi.string().required()
        });
    };

    static get update() {
        return {
            "body":
                Joi.object().keys({
                    parentId: Joi.string().guid().not(null),
                    name: Joi.string().min(5).max(30).not(null),
                    description: Joi.string().min(5).max(100).not(null),
                    photo: Joi.string().not(null)
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