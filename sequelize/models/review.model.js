module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('reviews', {
        uid: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        orderId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        clientId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        rate: {
            type: DataTypes.SMALLINT,
            allowNull: true
        },
        images: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            allowNull: true
        },
        comment: {
            type: DataTypes.STRING(200),
            allowNull: false
        }
    }, {
            tableName: 'reviews'
        })
    return Review;
}
