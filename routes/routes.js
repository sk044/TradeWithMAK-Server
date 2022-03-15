const express = require('express');
const route = express.Router();

const userController = require('../controller/userController');


//Bookshelf Apis

//APIs
route.post('/addUser', userController.saveUser);
route.get('/getUsers', userController.getUsers);
route.put('/updateUser/:id', userController.updateUser);
route.delete('/deleteUser/:id', userController.deleteUser);

module.exports = route