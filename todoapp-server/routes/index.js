const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/todo', (req, res) => {
  Todo.find({}).sort({ 'created': 1 }).exec(function(err, todos) {
    if (err)
      return res.status(500).send({ error: 'database failure' });
    res.json(todos);
  });
});

router.post('/todo', (req, res) => {
  const todo = new Todo();
  todo.tilte = req.body.title;
  
  todo.save(function(err) {
    if (err) {
      console.error(err);
      res.json({ result: 0 });
      return;
    }
    res.json({ result: 1 });
  });
});

router.delete("/todo/:todo_id", function(req, res) {
  Todo.remove({ _id: req.params.todo_id }, function(err, output) {
    if (err)
      return res.status(500).json({ error: 'database failure' });
    res.status(204).end();
  });
});

module.exports = router;
