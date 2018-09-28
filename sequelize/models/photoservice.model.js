const { signUpGetter, loginGetter, getGetter } = require("./model-getters/photoservice.getter");
module.exports = (sequelize, DataTypes) => {
    const PhotoService = sequelize.define('photoservices', {
        uid: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        refreshToken: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        avatar: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        card: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address: {
            type: DataTypes.JSONB,
            allowNull: false
        },
        isVerified: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
            tableName: 'photoservices',
            getterMethods: {
                signUpGetter,
                loginGetter,
                getGetter
            },
        })
    return PhotoService;
};

