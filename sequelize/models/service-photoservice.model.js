module.exports = (sequelize, DataTypes) => {
    const ServicePhotoService = sequelize.define('services_photoservices', {
        uid: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        photoServiceId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        serviceId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        data: {
            type: DataTypes.JSONB,
            allowNull: false
        },
        prize: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        }
    }, {
            tableName: 'services_photoservices'
        })
    return ServicePhotoService;
}
