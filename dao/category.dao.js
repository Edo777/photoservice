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
    };

    static update(data, uid) {
        return new Promise((resolve, reject) => {
            Category.isHaveAccessDoSomething(uid)
                .then(() => {
                    category.update(data, { where: { uid } })
                        .then(result => resolve(result))
                        .catch(error => reject(error))
                })
                .catch(accessError => reject(accessError))
        });
    };

    static delete(uid) {
        return new Promise((resolve, reject) => {
            Category.isHaveService(uid)
                .then(() => {
                    category.destroy({ where: { uid } })
                        .then(deleteResult => resolve(deleteResult))
                        .catch(deleteError => reject(deleteError));
                })
                .catch(accessError => reject(accessError));
        })
    };

    //check if that category service is not taked then do something
    static isHaveAccessDoSomething(uid) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT "sp"."uid" as "sp"
            FROM "photoservice".categories AS "ctg" 
            INNER JOIN "photoservice".services AS "srv" ON "srv"."categoryId" = "ctg"."uid"
            INNER JOIN "photoservice".services_photoservices AS "sp" ON "srv"."uid" = "sp"."serviceId"
            where "ctg"."uid" = :categoryId;`
            sequelize.query(sql, { replacements: { 'categoryId': uid }, returning: true }).then((result) => {
                if (result[0].length) {
                    return reject({ name: "Service of that category is already in use" })
                }
                return resolve();
            }).catch((error) => {
                return reject(error)
            })
        })
    };
    //check if category have a service
    static isHaveService(uid) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT "srv"."uid" as "serviceId"
            FROM "photoservice".categories AS "ctg" 
            INNER JOIN "photoservice".services AS "srv" ON "srv"."categoryId" = "ctg"."uid"
            WHERE "ctg"."uid" = :categoryId `;
            sequelize.query(sql, { replacements: { 'categoryId': uid } }).then((result) => {
                if (!result[0].length) {
                    return resolve()
                }
                return reject({ name: `if you want to delete that category, please in the beginning delete the service in that id(s) => ${JSON.stringify(result[0])}`, })
            }).catch((err) => {
                return reject(err);
            })
        })
    };
}

module.exports = Category;