const Sequelize = require('sequelize');
const config = require("../../config/config");
const sequelize = new Sequelize({
    ...config.db
    // logging: true
});

const models = {
    Admin: sequelize.import("./admin.model"),
    Order: sequelize.import("./order.model"),
    Client: sequelize.import("./client.model"),
    Review: sequelize.import("./review.model"),
    Service: sequelize.import("./service.model"),
    Category: sequelize.import("./category.model"),
    PhotoService: sequelize.import("./photoservice.model"),
    ServicePhotoService: sequelize.import("./service-photoservice.model"),
};

Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

module.exports = {
    ...models,
    sequelize
};