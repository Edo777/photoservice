const Joi = require('joi');

class Schema {
    static get login() {
        return Joi.object().keys({
            username: Joi.string().alphanum().min(3).max(30).required(),
            password: Joi.string().required()
        });
    }
}

module.exports = Schema;