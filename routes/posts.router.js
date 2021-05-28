var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const controller = require('../controller/posts.controller');
const authenticate = require('../authenticate');

router.use(bodyParser.json());

router.get('/', authenticate.verifyUser, controller.fetchAll);

router.post('/', authenticate.verifyUser, controller.write );

router.delete('/', authenticate.verifyUser, controller.deleteAll);

router.delete('/:postId', authenticate.verifyUser, controller.deleteOne);

router.put('/:postId', authenticate.verifyUser, controller.update);

router.get('/:postId', controller.fetchOne);

module.exports = router;
