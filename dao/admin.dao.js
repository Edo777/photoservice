const { Admin: admin } = require("../sequelize/models/models.sign");
const auth = require("../util/auth");
const uuid = require("uuid/v4");

class Admin {
    static async signUp() {
        try {
            const result = await admin.create({ uid: uuid(), username: `admin`, password: auth.hash(`admin`) });
            return result;
        } catch (error) {
            return error;
        }
    };

    static login(data) {
        return new Promise((resolve, reject) => {
            const password = auth.hash(data.password);
            admin.findOne({
                where: {
                    username: data.username,
                    password: password
                }
            }).then((result) => {
                if (!result) {
                    return reject({ name: "wrong login or password" });
                }
                return resolve(result)
            }).catch((error) => {
                return reject(error);
            })

        })
    };
};

module.exports = Admin;