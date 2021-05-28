var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
router.use(bodyParser.json());
const passport = require('passport');
var authenticate = require('../authenticate');
const controller = require('../controller/users.controller');



router.get('/', controller.fetchAll);

router.post('/signup', controller.signup);

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) 
          return next(err);
    
        if(!user) {
          res.statusCode = 401;
          res.setHeader('Content-Type', 'application/json');
          res.json({ success: false, status: 'Login Unsuccessful', err: info})
        }
    
        req.logIn(user, (err) => {
          if(err) {
            res.statusCode = 401;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: false, status: 'Login Unsuccessful', err: 'Could not login user'})
          }
    
          var token = authenticate.getToken({ _id: req.user._id });
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({ success: true, status: 'Login Successful', token: token})
    
        })
      }) (req, res, next);
});

router.get('/logout', controller.logout);  


module.exports = router;
