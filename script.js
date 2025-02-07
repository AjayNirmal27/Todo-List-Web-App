
        const taskInput = document.getElementById("taskInput");
        const taskList = document.getElementById("taskList");

        function loadTasks() {
            taskList.innerHTML = "";
            (JSON.parse(localStorage.getItem("tasks")) || []).forEach((task, i) => {
                taskList.innerHTML += `<li class="${task.completed ? 'completed' : ''}" onclick="toggleTask(${i})">
                    ${task.text} <button class="delete" onclick="event.stopPropagation(); deleteTask(${i})">X</button>
                </li>`;
            });
        }

        function saveTasks(tasks) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
            loadTasks();
        }

        function addTask() {
            if (!taskInput.value.trim()) return;
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push({ text: taskInput.value, completed: false });
            saveTasks(tasks);
            taskInput.value = "";
        }

        function toggleTask(index) {
            let tasks = JSON.parse(localStorage.getItem("tasks"));
            tasks[index].completed = !tasks[index].completed;
            saveTasks(tasks);
        }

        function deleteTask(index) {
            let tasks = JSON.parse(localStorage.getItem("tasks"));
            tasks.splice(index, 1);
            saveTasks(tasks);
        }

        function clearTasks() {
            localStorage.removeItem("tasks");
            loadTasks();
        }

        loadTasks();
    