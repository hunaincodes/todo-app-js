function addTask() {

    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    if (text === "") return;

    let li = document.createElement("li");

    li.innerHTML = `
        <span class="task-text" onclick="toggleTask(this)">${text}</span>

        <div class="actions">
            <button class="edit-btn" onclick="editTask(this)">Edit</button>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function deleteTask(btn) {
    btn.parentElement.parentElement.remove();
}

function toggleTask(span) {
    span.classList.toggle("completed");
}

function editTask(btn) {

    let li = btn.parentElement.parentElement;
    let span = li.querySelector(".task-text");

    let newText = prompt("Edit task:", span.innerText);

    if (newText !== null && newText.trim() !== "") {
        span.innerText = newText;
    }
}
