const express =require('express');
const router = express.Router();


const controller = require('../controller/user.controller')

router.get('/', controller.index);
router.get('/search', controller.search);
    //create
router.get('/create',controller.create); 	   
  
router.post('/create',controller.postCreate);
  
router.get('/:id',controller.getId);

module.exports =router;