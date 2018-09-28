const router = require("express").Router();
const Category = require("../service/category.service");
const Service = require("../service/service.service");
const PhotoService = require("../service/photoservice.service");
const { CategoryValidate, ServiceValidate, PhotoServiceValidate } = require("../sequelize/data-validators/index");

router.get('/photoservices', PhotoService.getAll);
router.get('/photoservice/:uid', PhotoServiceValidate.getOneFromAdmin, PhotoService.getOneFromAdmin);
router.put('/category/:uid', CategoryValidate.update, Category.update);
router.put('/service/:uid', ServiceValidate.update, Service.update)
router.post('/service', ServiceValidate.create, Service.create);
router.post('/category', CategoryValidate.create, Category.create);


module.exports = router;