"use strict";

window.addEventListener('DOMContentLoaded', () => {
    
    const form = document.querySelector('.todo-form'),
          formInput = form.querySelector('.add-task'), 
          todoList = document.querySelector('.todo-list'),
          todoItem = todoList.querySelectorAll('.todo-item');

    
    form.addEventListener('submit', addTodoItem); // Вешаем обработчик события на форму


    // Класс для создания ITEM внутри списка
    class newTodoItem {
        constructor(title,parent) {
            this.title = formInput.value;
            this.parent = todoList;
        }

        render() {

            const item = document.createElement('li');

            item.innerHTML = `
                <li class="todo-item">
                    <input type="checkbox" class="checkbox">
                    <label for="" class="title"> ${this.title}</label>
                    <input type="text" class="text">
                    <button class="add">Edit</button>
                    <button class="delete">Delete</button>
                </li>
            `;
            this.parent.append(item);

        }
    }

    // Функция проверяет инпут формы на пустое поле и создает новый ITEM в списке.
    function addTodoItem(e) {
        e.preventDefault();

        if(!formInput.value) {
            return alert("Please, enter task");
        }

        new newTodoItem().render();
    }

});