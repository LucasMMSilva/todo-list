const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todoController');

router.get('/',TodoController.showHome);
router.get('/filter/complete',TodoController.showCompleted);
router.get('/filter/todo',TodoController.showTodo);
router.post('/edit',TodoController.editTask);
router.post('/createnewtask',TodoController.createTask);
router.post('/check',TodoController.check);
router.post('/delete',TodoController.deleteTask);
router.post('/update',TodoController.updateTask)
module.exports = router;