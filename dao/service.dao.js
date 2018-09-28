const { Service: service, ServicePhotoService: servicePhotoService } = require("../sequelize/models/models.sign");

const uuid = require("uuid/v4");

class Service {
    static create(data) {
        return new Promise((resolve, reject) => {
            service.create({
                uid: uuid(),
                name: data.name,
                type: data.type || null,
                categoryId: data.categoryId,
                data: data.data
            }).then((result) => {
                return resolve(result.createGetter)
            }).catch(error => reject(error))
        })
    };

    static update(data, uid) {
        return new Promise((resolve, reject) => {
            servicePhotoService.findAll({
                where: {
                    serviceId: uid
                }
            }).then((result) => {
                if (result.length) {
                    return reject({ name: "references table is already in use" });
                } else {
                    service.update(data, { where: { uid } })
                        .then(result => resolve(result))
                        .catch(error => reject(error))
                }
            }).catch(error => reject(error));
        })
    };
}


module.exports = Service;