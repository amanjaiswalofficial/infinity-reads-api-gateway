const express = require('express');

const controllers = require('./contollers.js');


// Defining the router
const router = express.Router();

// Various routes
router.route('/create').post(controllers.createUser);
router.route('/find').get(controllers.findAll);
router.route('/find/:id').get(controllers.findOneUser);
router.route('/update/:id').put(controllers.updateUser);
router.route('/delete/:id').delete(controllers.deleteUser);


module.exports = router;
