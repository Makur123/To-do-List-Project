const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const completedCounter = document.getElementById('completed-counter');
const uncompletedCounter = document.getElementById('uncompleted-counter');

function addTask() {
    const task = inputBox.value.trim();
    if (!task) {
        alert("Please write down the task");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <label>
            <input type="checkbox" class="task-checkbox">
            <span class="task-text">${task}</span>
        </label>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;

    listContainer.appendChild(li);
    inputBox.value = ""; // Clear input after adding task

    const checkbox = li.querySelector(".task-checkbox");
    const editBtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector(".task-text");
    const deleteBtn = li.querySelector(".delete-btn");

    // Checkbox event listener
    checkbox.addEventListener("click", function () {
        li.classList.toggle("completed", checkbox.checked);
        updateCounters();
    });

    // Edit button event listener
    editBtn.addEventListener("click", function () {
        const update = prompt("Edit task:", taskSpan.textContent);
        if (update !== null) {
            taskSpan.textContent = update;
            li.classList.remove("completed");
            checkbox.checked = false;
            updateCounters();
        }
    });

    // Delete button event listener
    deleteBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this task?")) {
            li.remove();
            updateCounters();
        }
    });

    updateCounters();
}

// Function to update task counters
function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;
}
