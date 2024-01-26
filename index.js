    document.addEventListener('DOMContentLoaded', function () {
      const todoForm = document.getElementById('todo-form');
      const todoInput = document.getElementById('todo-input');
      const todoList = document.getElementById('todo-list');

      todoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addTodo();
      });

      function addTodo() {
        const todoText = todoInput.value.trim();

        if (todoText === '') {
          return;
        }

        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
          <span>${todoText}</span>
          <span class="delete-btn" onclick="deleteTodo(this)">Delete</span>
        `;

        todoList.appendChild(todoItem);
        todoInput.value = '';
      }

      window.deleteTodo = function (element) {
        const todoItem = element.closest('.todo-item');
        todoList.removeChild(todoItem);
      };
    });
