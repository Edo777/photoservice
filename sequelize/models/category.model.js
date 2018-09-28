module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('categories', {
        uid: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        photo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        parentId: {
            type: DataTypes.UUID,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
            tableName: 'categories'
        })
    return Category;
}
