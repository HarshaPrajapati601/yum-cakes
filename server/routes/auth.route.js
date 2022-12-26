// to decide what to do if we get a post or get or patch
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// now if we get /api/auth/test
// we can  do router.get('test', (req,res) => {..do something})
// so instead of that , we are going to create a controller and pass that file when the route matches 

router.post('/register', authController.register)

module.exports = router;