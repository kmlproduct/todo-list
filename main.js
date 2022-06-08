var todoInput = document.querySelector('.todo-input');
var submitBtn = document.querySelector('.todo-button');
var todoList = document.querySelector('.todo-list');


// add eventListnner
submitBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)

function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement('div');

    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');

    newTodo.innerHTML = todoInput.value;

    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);

    // check mark button
    const completButton = document.createElement('button');

    completButton.innerHTML = '<i class="fas fa-check" ></i>'

    completButton.classList.add('complete-btn');

    todoDiv.appendChild(completButton);

    // check mark button
    const trashButton = document.createElement('button');

    trashButton.innerHTML = '<i class="fas fa-trash" ></i>'

    trashButton.classList.add('trash-btn');

    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv)

    todoInput.value = ''


}

function deleteCheck(e) {
    const item = e.target;

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add('fall')
        todo.addEventListener("transitionend", function () {
            todo.remove();
        })

    }
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed')

    }
}