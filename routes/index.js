const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const taskController = require('../controllers/TaskController');

//routing individual task which is done by user
router.get('/',mainController.main);
router.post('/add-task',taskController.addTask);
router.get('/delete-task/',mainController.delete);

console.log("Router is running successfully");


module.exports = router;