/*global angular*/
/*global fetch*/
/*global localStorage*/
/*
fetch('https://todo-ciegovolador.c9users.io/api/tasks')
  .then( response => response.json())
  
  .then( myJson => localStorage.setItem('mauro', JSON.stringify(myJson)))
  
  .catch( err => console.log("error vieja",err));

/*
  localStorage.setItem('mauro', JSON.stringify(tasks))
  let storedTasks = localStorage.getItem('mauro');
  console.log(JSON.parse(storedTasks))
  */


angular.module('todoApp', [])
  
  .controller('TodoListController', function() {
   var todoList = this;
   todoList.todos = JSON.parse(localStorage.getItem('mauro'))

    todoList.createTodo = () => {
      todoList.todos.push({id: '_' + Math.random().toString(36).substr(2, 9), name:todoList.todoName, done:false});
      todoList.todoText = '';
      todoList.save();
    };
    
    todoList.remaining = () => {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.save = () => {
      localStorage.setItem('mauro', JSON.stringify(todoList.todos))
    };
    
    todoList.check = () => {
      console.log(todoList.todo.done)
    };
    todoList.update = (id, newName) => { 
      todoList.save()
      //todoList.todos.todo.id == id ? todoList.todos.todo.name = newName : console.log("404")
      //let todo 
      //console.log( todoList.todos.filter((t)=>t.id==id)[0].name) 
    };
    
    
    todoList.archive = () => {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, (todo) => {
        if (!todo.done) todoList.todos.push(todo);
      });
      todoList.save();
    };
  });


/*
Copyright 2019 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/