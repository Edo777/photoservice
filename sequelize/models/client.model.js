module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('clients', {
        uid: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bonus : {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        refreshToken : {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
            tableName: 'clients'
        })
    return Client
}
