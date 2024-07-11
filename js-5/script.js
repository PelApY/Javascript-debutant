const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', function () {
    const taskText = newTaskInput.value;
    const taskItem = document.createElement('li');
    const taskCheckbox = document.createElement('input');
    const taskLabel = document.createElement('label');

    taskCheckbox.type = 'checkbox';
    taskLabel.innerText = taskText;

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskLabel);
    taskList.appendChild(taskItem);

    newTaskInput.value = '';
});

taskList.addEventListener('change', function(event) {
    if (event.target.type === 'checkbox') {
      const taskItem = event.target.parentElement;
      taskItem.classList.toggle('completed');
    }
  });