const dao = require("../dao/admin.dao");


class Admin {
    static signUp(req, res) {
        dao.signUp().then(() => {

        }).catch(() => {

        });
    };
};

//Admin.signUp();
module.exports = Admin;