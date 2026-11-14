const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const taskStats = document.getElementById('task-stats');

function updateStats() {
    const totalTask = taskList.querySelectorAll('li:not(.completed)').length;
    taskStats.textContent = `${totalTask} ${totalTask === 1 ? 'task' : 'tasks'} remaining'`;
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;
    span.addEventListener('click', () => {
        li.classList.toggle('completed');
        updateStats();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
        li.remove();
        updateStats();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
    updateStats();
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }

});