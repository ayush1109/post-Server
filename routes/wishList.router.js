var express = require('express');
var router = express.Router();
const controller = require('../controller/wishList.controller');

router.get('/', controller.fetchAll);

router.post('/', controller.write );

router.delete('/', controller.deleteAll);

router.delete('/:wishListId', controller.deleteOne);

router.put('/:wishListId', controller.update);

router.get('/:wishListId', controller.fetchOne);

module.exports = router;
