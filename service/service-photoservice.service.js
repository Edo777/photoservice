const dao = require("../dao/service-photoservice.dao");

class ServicePhotoService {
    static create(req, res) {
        req.body.photoServiceId = res.locals['uid'];
        dao.create(req.body).then((result) => {
            return res.status(200).json(result);
        }).catch((error) => {
            return res.status(400).json(error.name);
        })
    };

    static update(req, res) {
        dao.update(req.body, req.params.uid)
            .then((data) => {
                if (!data[0]) {
                    return res.status(404).send("referenced service-photoservice id is wrong");
                }
                return res.status(200).send("updated");
            })
            .catch((error) => res.status(400).json(error.name))
    };
}

module.exports = ServicePhotoService;