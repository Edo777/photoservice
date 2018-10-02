const dao = require("../dao/client.dao");

class Client {
    static signUp(req, res) {
        dao.signUp(req.body).then((result) => {
            return res.status(200).json(result);
        }).catch(err => res.status(400).send(err))
    }
}

module.exports = Client;