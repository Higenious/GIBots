let express  =  require('express');
const router =  express.Router();
const users  = require('../controller/userController');


router.get('/getusers', users.getUsers);
router.get('/getmalereport', users.getMaleReport);
router.get('/getfemalereoprt', users.getFemaleReport)


module.exports = router;

