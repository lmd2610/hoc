const express =require('express');
const router = express.Router();

const validate = require('../validate/user.validate')
const controller = require('../controller/user.controller')
const authMiddleware = require('../middleware/auth.middleware');

router.get('/',authMiddleware.requireAuth, controller.index);

router.get('/search',authMiddleware.requireAuth,controller.search);
    //create
router.get('/create',authMiddleware.requireAuth,controller.create); 	   
  
router.post('/create',authMiddleware.requireAuth,validate.postCreate,controller.postCreate);
  
router.get('/:id',authMiddleware.requireAuth,controller.getId);

module.exports =router;