const dao = require("../dao/service.dao");

class Service {
    static create(req, res) {
        dao.create(req.body)
            .then((data) => res.status(200).json(data))
            .catch((error) => res.status(400).send(error.name))
    };

    static update(req, res) {
        dao.update(req.body, req.params.uid)
            .then((data) => {
                if (!data[0]) {
                    return res.status(404).send("service id is wrong");
                }
                return res.status(200).send("updated");
            })
            .catch((error) => res.status(400).send(error.name))
    };

    static delete(req, res) {
        dao.delete(req.params.uid)
            .then((result) => {
                if(!result){
                    return res.status(400).send("Id is wrong")
                }
                return res.status(200).send("deleted")
            })
            .catch(error => res.status(400).send(error.name));
    }
}

module.exports = Service;