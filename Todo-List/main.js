const textInput = document.getElementById('todos');
const AddTodo = document.getElementById('add-Todo');
const todosUl = document.getElementById('todosUl');

let textInputValue = "";
let todosDizi = [];

textInput.addEventListener('change', function (event) {
    textInputValue = event.target.value;
});

AddTodo.addEventListener('click', todoEkle);

function todoEkle(e) {
    e.preventDefault();
    todosDizi.unshift({ id: todosDizi.length + 1, Listem: textInputValue });
    document.getElementById('todos').value = "";
    displayTodo();
}

function deleteTodo(id) {
    let deleted;
    for (let index in todosDizi) {
        if (todosDizi[index].id == id) {
            deleted = index;
        }
    }
    todosDizi.splice(deleted, 1);
    displayTodo();
}

function displayTodo() {
    let sonuc = "";

    if (todosDizi.length === 0) {
        todosUl.innerHTML = "Liste Boş";
    } else {
        todosDizi.forEach((item) => {
            sonuc += `
            <li class="flex justify-between border px-4 py-3 flex items-center">
                <span>${item.Listem}</span>
                <button class="text-red-400" onclick="deleteTodo(${item.id})">Sil</button>
            </li>
            `;
        });
        todosUl.innerHTML = sonuc;
    }
}

function clearTodos() {
    todosDizi.splice(0, todosDizi.length);
    displayTodo();
}

displayTodo();
