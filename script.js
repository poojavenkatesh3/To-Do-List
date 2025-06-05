function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return;

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        ${taskInput.value}
        <button onclick="removeTask(this)">❌</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = "";
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
