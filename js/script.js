const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
const filterOption = document.getElementById('filter-todo');
const deleteAllBtn = document.getElementById('delete-all');

// 1. Fungsi Tambah Task
todoForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const task = document.getElementById('todo-input').value;
    const date = document.getElementById('date-input').value;

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td class="task-text">${task}</td>
        <td>${date}</td>
        <td><input type="checkbox" class="complete-check"></td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    todoList.appendChild(tr);
    todoForm.reset();
});

// 2. Fungsi Hapus & Checklist
todoList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.parentElement.remove();
    }

    if (e.target.classList.contains('complete-check')) {
        const row = e.target.parentElement.parentElement;
        row.classList.toggle('completed');
    }
});

// 3. Fungsi Filter (Sederhana)
filterOption.addEventListener('change', function (e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        if (todo.nodeType === 1) { // Memastikan ini adalah elemen element
            switch (e.target.value) {
                case "all":
                    todo.style.display = "table-row";
                    break;
                case "completed":
                    todo.style.display = todo.classList.contains('completed') ? "table-row" : "none";
                    break;
                case "uncompleted":
                    todo.style.display = !todo.classList.contains('completed') ? "table-row" : "none";
                    break;
            }
        }
    });
});

// 4. Delete All
deleteAllBtn.addEventListener('click', () => {
    todoList.innerHTML = '';
});