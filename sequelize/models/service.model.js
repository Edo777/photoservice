const { createGetter } = require("./model-getters/service.getter")
module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define('services', {
        uid: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.UUID,
            allowNull: false
        },
        categoryId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        data: {
            type: DataTypes.JSONB,
            allowNull: false
        }
    }, {
            tableName: 'services',
            getterMethods: {
                createGetter
            },
        })
    return Service;
}
