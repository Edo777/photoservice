const { Client: client } = require("../sequelize/models/models.sign");
const Phone = require("../util/phone-message");
const uuid = require("uuid/v4");

class Client {
    static signUp(data) {
        return new Promise((resolve, reject) => {
            const randomNumber = Math.floor(Math.random() * (5999 - 1001) + 1001);
            client.create({
                uid: uuid(),
                bonus: 0,
                name: data.name,
                surname: data.surname,
                phone: data.phone,
                verifyCode: randomNumber,
                refreshToken: '5145151525451541541'
            }).then((result) => {
                (async () => {
                    await Phone.send(data.phone, randomNumber);
                    return resolve(result);
                })();
            }).catch((error) => {
                return reject(error)
            })
        })
    }
}

module.exports = Client;