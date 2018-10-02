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
            if (data.isDeleted) {
                return res.status(401).send("you are deleted!!!. For help call to admin");
            }
            const tokenSign = jwtSign({
                uid: data.uid,
                name: data.name
            });
            const sendingData = data.isVerified ?
                {
                    token: tokenSign,
                    refreshToken: data.refreshToken
                } : {
                    token: tokenSign,
                    refreshToken: data.refreshToken,
                    canVerify: data.verifyNumber ? true : false
                }
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

    static signUpVerifyNumber(req, res) {
        dao.signUpVerifyNumber(req.body.verifyNumber, req.params.uid)
            .then((data) => {
                if (!data[0]) {
                    return res.status(404).send("Id is wrong");
                }
                return res.status(200).send("verify number is created successfully");
            })
            .catch((error) => res.status(400).send(error.name))
    };

    static verify(req, res) {
        dao.verify(req.body.verifyNumber, res.locals['uid'])
            .then((data) => {
                if (!data[0]) {
                    return res.status(404).send("verification code is wrong");
                }
                return res.status(200).send("verification successfully");
            })
            .catch((error) => res.status(400).send(error.name))
    };

    static delete(req, res) {
        dao.delete(req.params['uid'])
            .then((data) => {
                if (!data[0]) {
                    return res.status(404).send("photoservice not found");
                }
                return res.status(200).send("deleted successfully");
            })
            .catch((error) => res.status(400).send(error.name))
    };

    static activeUnActive(req, res) {
        dao.activeUnActive(req.body, res.locals['uid'])
            .then((data) => {
                if (!data[0]) {
                    return res.status(404).send("password is wrong");
                }
                return res.status(200).send("successfully");
            })
            .catch((error) => res.status(400).send(error.name));
    };
}

module.exports = PhotoService;