const { PhotoService: photoService } = require("../sequelize/models/models.sign");
const auth = require("../util/auth");
const uuid = require("uuid/v4");

class PhotoService {
    static signUp(data) {
        return new Promise((resolve, reject) => {
            const password = auth.hash(data.password);
            const refreshToken = auth.hash(`${Date.now()}`);
            photoService.create({
                uid: uuid(),
                username: data.username,
                password: password,
                refreshToken: refreshToken,
                image: data.image || null,
                avatar: data.avatar || null,
                card: data.card || null,
                phone: data.phone,
                name: data.name,
                description: data.description || null,
                address: data.address,
                isVerified: false,
                isDeleted: false,
                isUnActive: false
            }).then((result) => {
                return resolve(result.signUpGetter);
            }).catch((error) => {
                return reject(error)
            })

        })
    };

    static login(data) {
        return new Promise((resolve, reject) => {
            const password = auth.hash(data.password);
            photoService.findOne({
                where: {
                    username: data.username,
                    password: password
                }
            }).then((result) => {
                if (!result) {
                    return reject({ name: "wrong login or password" });
                }
                return resolve(result.loginGetter)
            }).catch((error) => {
                return reject(error);
            })

        })
    };

    static getAll() {
        return new Promise((resolve, reject) => {
            photoService.findAll().then((result) => {
                if (result.length) {
                    result = result.map((item) => {
                        return item.getGetter
                    })
                };
                return resolve(result);
            }).catch((error) => {
                return reject(error);
            })
        });
    };

    static getOne(uid) {
        return new Promise((resolve, reject) => {
            photoService.findById(uid).then((result) => {
                if (!result) {
                    return reject({ name: 'Id is wrong' });
                }
                return resolve(result.getGetter);
            }).catch((error) => reject(error));
        })
    };

    static update(data, uid) {
        return new Promise((resolve, reject) => {
            photoService.update(data, { where: { uid } })
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    };

    static signUpVerifyNumber(verifyNumber, uid) {
        return new Promise((resolve, reject) => {
            photoService.update({ verifyNumber }, { where: { uid } })
                .then(result => resolve(result))
                .catch(error => reject(error));
        })
    };

    static verify(code, uid) {
        return new Promise((resolve, reject) => {
            photoService.update({ isVerified: true }, { where: { uid, verifyNumber: code } })
                .then((result) => resolve(result))
                .catch(error => reject(error))
        })
    };

    static delete(uid) {
        return new Promise((resolve, reject) => {
            photoService.update({ isDeleted: true }, { where: { uid } })
                .then(result => resolve(result))
                .catch(error => reject(error));
        })
    };

    static activeUnActive(data, uid) {
        return new Promise((resolve, reject) => {
            data.password = auth.hash(data.password);
            photoService.update({ isUnActive: data.isUnActive }, { where: { uid, password : data.password } })
                .then(result => resolve(result))
                .catch(error => reject(error));
        })
    };
}


module.exports = PhotoService;