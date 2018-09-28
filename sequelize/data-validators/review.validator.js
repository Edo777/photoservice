const Joi = require('joi');

class Validate {
    static AdminLogin(){
        Joi.object().keys({
            username: Joi.string().alphanum().min(3).max(30).required(),
            password: Joi.string().required()
        }).with('username', 'birthyear').without('password', 'access_token');
    }
}

module.exports = Validate;