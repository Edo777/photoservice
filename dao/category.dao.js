const { Category: category, sequelize } = require("../sequelize/models/models.sign");
const uuid = require("uuid/v4");

class Category {
    static create(data) {
        return new Promise((resolve, reject) => {
            category.create({
                uid: uuid(),
                name: data.name,
                description: data.description,
                photo: data.photo
            })
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    }

    static update(data, uid) {
        return new Promise((resolve, reject) => {
            //TODO: if service of that category is taked don't update
            category.update(data, { where: { uid } })
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    };
}

module.exports = Category;