const dao = require("../dao/photoservice.dao");
const { jwtSign } = require("../util/auth");

class PhotoService {
    static signUp(req, res) {
        dao.signUp(req.body)
            .then(data => res.status(200).json(data))
            .catch((error) => res.status(400).json(error.name));
    };

    static login(req, res) {
        dao.login(req.body).then((data) => {
            const tokenSign = jwtSign({
                uid: data.uid,
                name: data.name
            });
            const sendingData = {
                token: tokenSign,
                refreshToken: data.refreshToken
            };
            return res.status(200).json(sendingData);
        }).catch((error) => {
            return res.status(400).send(error.name);
        })
    };

    static getAll(req, res) {
        dao.getAll()
            .then(data => res.status(200).json(data))
            .catch(error => res.status(400).json(error.name));
    };

    static getOneFromAdmin(req, res) {
        dao.getOne(req.params.uid)
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).send(error.name));
    };

    static getOne(req, res) {
        dao.getOne(res.locals['uid'])
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).send(error.name));
    };

    static update(req, res) {
        dao.update(req.body, res.locals['uid'])
            .then((data) => {
                if (!data[0]) {
                    return res.status(404).send("id is wrong");
                }
                return res.status(200).send("updated");
            })
            .catch((error) => res.status(400).json(error))
    };
}

module.exports = PhotoService;