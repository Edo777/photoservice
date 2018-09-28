module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('admin', {
        uid: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
            tableName: 'admin'
        })
    return Admin
}
