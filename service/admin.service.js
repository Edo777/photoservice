const dao = require("../dao/admin.dao");


class Admin {
    static signUp(req, res) {
        dao.signUp().then(() => {

        }).catch(() => {

        });
    };
    static login(req, res) {
        dao.login(req.body).then((data) => {
            return res.status(200).json("logged");
        }).catch((error) => {
            return res.status(400).send(error.name);
        })
    };
};

//Admin.signUp();
module.exports = Admin;