const crypto = require("crypto");
const jwt = require('jsonwebtoken');
const secret = "photoservice_project";


class Authentication {
    static hash(any) {
        return crypto.createHash('sha256').update(any).digest('hex');
    };

    static jwtVerify(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, secret, (error, decoded) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(decoded);
                }
            })
        })
    };

    static jwtSign(tokenObject) {
        return jwt.sign(tokenObject, secret, { expiresIn: 2000000 });
    };
}

module.exports = Authentication;