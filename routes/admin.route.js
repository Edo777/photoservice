const router = require("express").Router();
const Category = require("../service/category.service");
const Service = require("../service/service.service");
const Admin = require("../service/admin.service");
const PhotoService = require("../service/photoservice.service");
const { CategoryValidate, ServiceValidate, PhotoServiceValidate, AdminValidate } = require("../sequelize/data-validators/index");

router.post('/login', AdminValidate.login, Admin.login);

router.get('/photoservices', PhotoService.getAll);
router.get('/photoservice/:uid', PhotoServiceValidate.getOneFromAdmin, PhotoService.getOneFromAdmin);
router.put('/category/:uid', CategoryValidate.update, Category.update);
router.put('/service/:uid', ServiceValidate.update, Service.update);
router.post('/photoservice/contract/:uid', PhotoServiceValidate.createVerifyNumber, PhotoService.signUpVerifyNumber);
router.post('/service', ServiceValidate.create, Service.create);
router.post('/category', CategoryValidate.create, Category.create);
router.delete('/service/:uid', ServiceValidate.delete, Service.delete);
router.delete('/category/:uid', CategoryValidate.delete, Category.delete);
router.delete('/photoservice/:uid', PhotoServiceValidate.delete, PhotoService.delete);


module.exports = router;