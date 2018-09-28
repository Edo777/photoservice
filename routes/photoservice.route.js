const router = require("express").Router();
const {
    PhotoServiceValidate,
    ServicePhotoServiceValidate
} = require("../sequelize/data-validators/index");
const PhotoService = require("../service/photoservice.service");
const ServicePhotoService = require("../service/service-photoservice.service");

router.post('/', PhotoServiceValidate.signUp, PhotoService.signUp);
router.post('/login', PhotoServiceValidate.login, PhotoService.login);

router.use(PhotoServiceValidate.checkToken);

router.get('/', PhotoService.getOne);
router.put('/', PhotoServiceValidate.update, PhotoService.update);
router.post('/service/ref', ServicePhotoServiceValidate.create, ServicePhotoService.create);
router.put('/service/ref/:uid', ServicePhotoServiceValidate.update, ServicePhotoService.update);


module.exports = router;