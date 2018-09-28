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
    }
};

module.exports = Admin;