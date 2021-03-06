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


let genID = () =>
{
  let id = '_' + Math.random(Date.now()).toString(36).substr(2, 9) 
  return(id)
}


angular.module('todoApp', [])
  
  .controller('TodoListController', function($scope) {
   var todoList = this;
   todoList.todos = JSON.parse(localStorage.getItem('todoList'))
   

    todoList.createTodo = () => {
      
      todoList.todos.push({id: genID(), name:todoList.todoName, done:false});
      todoList.todoName = '';
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
      localStorage.setItem('todoList', JSON.stringify(todoList.todos))
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