const dao = require("../dao/category.dao");

class Category {
    static create(req, res) {
        dao.create(req.body)
            .then(result => res.status(200).json(result))
            .catch(error => res.status(400).json(error.name));
    }

    static update(req, res) {
        dao.update(req.body, req.params.uid)
            .then((data) => {
                if (!data[0]) {
                    return res.status(404).send("Category id is wrong");
                }
                return res.status(200).send("updated");
            })
            .catch((error) => res.status(400).json(error))
    };

    static delete(req, res) {
        dao.delete(req.params.uid).then((result) => {
            if (result) {
                return res.status(200).send("deleted");
            }
            return res.status(400).send("id is wrong" );
        }).catch(err => res.status(400).send(err.name));
    }
}

module.exports = Category;