module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('orders', {
        uid: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        servicePhotoServiceId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        createDate: {
            type: DataTypes.CHAR(30),
            allowNull: false,
        },
        expectDate: {
            type: DataTypes.CHAR(30),
            allowNull: false,
        },
        status: {
            type: DataTypes.CHAR(30),
            allowNull: false,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        clientId : {
            type: DataTypes.UUID,
            allowNull: false,
        },
        data: {
            type: DataTypes.JSONB,
            allowNull: false
        }
    }, {
            tableName: 'orders'
        })
    return Order;
}
