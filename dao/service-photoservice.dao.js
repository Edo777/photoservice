const { ServicePhotoService: servicePhotoService } = require("../sequelize/models/models.sign");
const uuid = require("uuid/v4");

class ServicePhotoService {
    static create(data) {
        return new Promise((resolve, reject) => {
            servicePhotoService.create({
                uid: uuid(),
                photoServiceId: data.photoServiceId,
                serviceId: data.serviceId,
                data: data.data,
                prize: data.prize
            })
            .then(result => {
                resolve(result)
            })
            .catch(error => reject(error));
        })
    };

    static update(data, uid) {
        return new Promise((resolve, reject) => {
            servicePhotoService.update(data, { where: { uid } })
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    };
}

module.exports = ServicePhotoService;