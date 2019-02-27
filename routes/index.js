const { Router } = require('express');

const router = Router();

let tasks = [
            {id:1, name: 'asdasd', done: 0},
            {id:2, name: 'asdasasdasddd', done: 0},
            {id:3, name: 'DOndeasdasasdasddd', done: 1}
            ]


/* GET index page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Todo list'
  });
});

router.get('/tasks', (req, res) => {
  res.render('tasks', {
    tasks: tasks
  });
});

router.get('/todos', (req, res) => {
  res.render('tasks', {
    tasks: tasks.filter(t => t.done == 0)
  });
});

router.get('/dones', (req, res) => {
  res.render('tasks', {
    tasks: tasks.filter(t => t.done == 1)
  });
});

router.get('/tasks/id/:id', (req, res) => {
  res.render('tasks', {
    tasks: tasks.filter(t => t.id == req.params.id)
  });
});

router.get('/tasks/name/:name', (req, res) => {
  res.render('tasks', {
    tasks: tasks.filter(t => t.name == req.params.name)
  });
});

router.get('/tasks/create/:name', (req, res) => {
  res.render('tasks', {
    tasks: tasks.push({id: tasks.length+1 , name: req.params.name, done: 0})
  });
});

router.post('/api/tasks/create', (req, res) => {
  let task = {id: tasks.length+1 , name: req.body.name, done: 0};
  tasks.push(task);
  res.json(task);
  console.log(task);
});

router.delete('/api/tasks/delete/', (req, res) => {
  tasks = tasks.filter(t => t.id != req.body.id);
  res.json(tasks);
  console.log(tasks);
});

//API

router.get('/api/tasks', (req, res) => {
    res.json(tasks)
});

router.get('/api/todos', (req, res) => {
    res.json(tasks.filter(t => t.done == 0))
});

router.get('/api/dones', (req, res) => {
  res.json(tasks)
});


module.exports = router;
